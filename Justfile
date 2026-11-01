default: dev

docker-build:
  docker compose build

_serve script port host_port="":
  @set -eu; \
  if [ -n "{{host_port}}" ]; then \
    container="$(docker compose run --detach --rm --publish "127.0.0.1:{{host_port}}:{{port}}" app npm run {{script}})"; \
    assigned_port="{{host_port}}"; \
  else \
    container="$(docker compose run --detach --rm --publish "127.0.0.1::{{port}}" app npm run {{script}})"; \
    assigned_port="$(docker port "$container" "{{port}}/tcp" | sed 's/.*://')"; \
  fi; \
  printf 'Open at http://localhost:%s\n' "$assigned_port"; \
  trap 'docker stop "$container" >/dev/null 2>&1 || true' INT TERM EXIT; \
  docker logs --follow "$container"

dev: docker-build
  just _serve dev 5173 15173

assets:
  docker compose run --rm app npm run build:assets

build:
  docker compose run --rm app npm run build

preview: build
  just _serve preview 4173

deps:
  docker compose run --rm app npm ci
