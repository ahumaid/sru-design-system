import AccordionSection from '../components/sections/AccordionSection.vue';
import AiSkillSection from '../components/sections/AiSkillSection.vue';
import AlertsSection from '../components/sections/AlertsSection.vue';
import BadgeSection from '../components/sections/BadgeSection.vue';
import BreadcrumbSection from '../components/sections/BreadcrumbSection.vue';
import BrandLogosSection from '../components/sections/BrandLogosSection.vue';
import ButtonGroupSection from '../components/sections/ButtonGroupSection.vue';
import ButtonsSection from '../components/sections/ButtonsSection.vue';
import CardsSection from '../components/sections/CardsSection.vue';
import CarouselSection from '../components/sections/CarouselSection.vue';
import CloseButtonSection from '../components/sections/CloseButtonSection.vue';
import CollapseSection from '../components/sections/CollapseSection.vue';
import DropdownsSection from '../components/sections/DropdownsSection.vue';
import FormsSection from '../components/sections/FormsSection.vue';
import FoundationsSection from '../components/sections/FoundationsSection.vue';
import GettingStartedSection from '../components/sections/GettingStartedSection.vue';
import HelpersSection from '../components/sections/HelpersSection.vue';
import IconsSection from '../components/sections/IconsSection.vue';
import IntroductionSection from '../components/sections/IntroductionSection.vue';
import InstallationSection from '../components/sections/InstallationSection.vue';
import ListGroupSection from '../components/sections/ListGroupSection.vue';
import ModalSection from '../components/sections/ModalSection.vue';
import NavbarSection from '../components/sections/NavbarSection.vue';
import NavsSection from '../components/sections/NavsSection.vue';
import OffcanvasSection from '../components/sections/OffcanvasSection.vue';
import PaginationSection from '../components/sections/PaginationSection.vue';
import PlaceholdersSection from '../components/sections/PlaceholdersSection.vue';
import PopoversSection from '../components/sections/PopoversSection.vue';
import ProgressSection from '../components/sections/ProgressSection.vue';
import ScrollspySection from '../components/sections/ScrollspySection.vue';
import SpinnersSection from '../components/sections/SpinnersSection.vue';
import TablesSection from '../components/sections/TablesSection.vue';
import ToastsSection from '../components/sections/ToastsSection.vue';
import TooltipsSection from '../components/sections/TooltipsSection.vue';

export const gallerySections = [
  { id: 'introduction', group: 'guide', icon: 'book-open', labelKey: 'guide.introduction', routeName: 'introduction', routePath: '/', component: IntroductionSection },
  { id: 'getting-started', group: 'guide', icon: 'rocket', labelKey: 'guide.gettingStarted', routeName: 'getting-started', routePath: '/guide/getting-started', component: GettingStartedSection },
  { id: 'installation', group: 'guide', icon: 'download', labelKey: 'guide.installation', routeName: 'installation', routePath: '/guide/installation', component: InstallationSection },
  { id: 'ai-skill', group: 'guide', icon: 'bot', labelKey: 'guide.aiSkill', routeName: 'ai-skill', routePath: '/guide/ai-skill', component: AiSkillSection },
  { id: 'foundations', group: 'components', icon: 'layers-3', labelKey: 'nav.components.foundations', routeName: 'foundations', routePath: '/foundations', component: FoundationsSection },
  { id: 'brand-logos', group: 'components', icon: 'badge', labelKey: 'nav.components.logos', routeName: 'logos', routePath: '/components/logos', component: BrandLogosSection },
  { id: 'icons', group: 'components', icon: 'icons', labelKey: 'nav.components.icons', routeName: 'icons', routePath: '/components/icons', component: IconsSection },
  { id: 'accordion', group: 'components', icon: 'chevrons-up-down', labelKey: 'nav.components.accordion', routeName: 'accordion', routePath: '/components/accordion', component: AccordionSection },
  { id: 'alerts', group: 'components', icon: 'triangle-alert', labelKey: 'nav.components.alerts', routeName: 'alerts', routePath: '/components/alerts', component: AlertsSection },
  { id: 'badge', group: 'components', icon: 'tag', labelKey: 'nav.components.badge', routeName: 'badge', routePath: '/components/badge', component: BadgeSection },
  { id: 'breadcrumb', group: 'components', icon: 'route', labelKey: 'nav.components.breadcrumb', routeName: 'breadcrumb', routePath: '/components/breadcrumb', component: BreadcrumbSection },
  { id: 'buttons', group: 'components', icon: 'mouse-pointer-click', labelKey: 'nav.components.buttons', routeName: 'buttons', routePath: '/components/buttons', component: ButtonsSection },
  { id: 'button-group', group: 'components', icon: 'panels-top-left', labelKey: 'nav.components.button-group', routeName: 'button-group', routePath: '/components/button-group', component: ButtonGroupSection },
  { id: 'cards', group: 'components', icon: 'square-stack', labelKey: 'nav.components.cards', routeName: 'cards', routePath: '/components/cards', component: CardsSection },
  { id: 'carousel', group: 'components', icon: 'gallery-horizontal', labelKey: 'nav.components.carousel', routeName: 'carousel', routePath: '/components/carousel', component: CarouselSection },
  { id: 'close-button', group: 'components', icon: 'x', labelKey: 'nav.components.close-button', routeName: 'close-button', routePath: '/components/close-button', component: CloseButtonSection },
  { id: 'collapse', group: 'components', icon: 'panel-top', labelKey: 'nav.components.collapse', routeName: 'collapse', routePath: '/components/collapse', component: CollapseSection },
  { id: 'dropdowns', group: 'components', icon: 'chevron-down', labelKey: 'nav.components.dropdowns', routeName: 'dropdowns', routePath: '/components/dropdowns', component: DropdownsSection },
  { id: 'forms', group: 'components', icon: 'clipboard-pen', labelKey: 'nav.components.forms', routeName: 'forms', routePath: '/components/forms', component: FormsSection },
  { id: 'list-group', group: 'components', icon: 'list', labelKey: 'nav.components.list-group', routeName: 'list-group', routePath: '/components/list-group', component: ListGroupSection },
  { id: 'modal', group: 'components', icon: 'square-dashed', labelKey: 'nav.components.modal', routeName: 'modal', routePath: '/components/modal', component: ModalSection },
  { id: 'navbar', group: 'components', icon: 'menu', labelKey: 'nav.components.navbar', routeName: 'navbar', routePath: '/components/navbar', component: NavbarSection },
  { id: 'navs', group: 'components', icon: 'panels-top-left', labelKey: 'nav.components.navs', routeName: 'navs', routePath: '/components/navs', component: NavsSection },
  { id: 'offcanvas', group: 'components', icon: 'panel-right', labelKey: 'nav.components.offcanvas', routeName: 'offcanvas', routePath: '/components/offcanvas', component: OffcanvasSection },
  { id: 'pagination', group: 'components', icon: 'files', labelKey: 'nav.components.pagination', routeName: 'pagination', routePath: '/components/pagination', component: PaginationSection },
  { id: 'placeholders', group: 'components', icon: 'text-cursor-input', labelKey: 'nav.components.placeholders', routeName: 'placeholders', routePath: '/components/placeholders', component: PlaceholdersSection },
  { id: 'popovers', group: 'components', icon: 'message-circle', labelKey: 'nav.components.popovers', routeName: 'popovers', routePath: '/components/popovers', component: PopoversSection },
  { id: 'progress', group: 'components', icon: 'chart-no-axes-column-increasing', labelKey: 'nav.components.progress', routeName: 'progress', routePath: '/components/progress', component: ProgressSection },
  { id: 'scrollspy', group: 'components', icon: 'scan', labelKey: 'nav.components.scrollspy', routeName: 'scrollspy', routePath: '/components/scrollspy', component: ScrollspySection },
  { id: 'spinners', group: 'components', icon: 'loader-circle', labelKey: 'nav.components.spinners', routeName: 'spinners', routePath: '/components/spinners', component: SpinnersSection },
  { id: 'tables', group: 'components', icon: 'table', labelKey: 'nav.components.tables', routeName: 'tables', routePath: '/components/tables', component: TablesSection },
  { id: 'toasts', group: 'components', icon: 'bell', labelKey: 'nav.components.toasts', routeName: 'toasts', routePath: '/components/toasts', component: ToastsSection },
  { id: 'tooltips', group: 'components', icon: 'message-circle-question', labelKey: 'nav.components.tooltips', routeName: 'tooltips', routePath: '/components/tooltips', component: TooltipsSection },
  { id: 'helpers', group: 'components', icon: 'wrench', labelKey: 'nav.components.helpers', routeName: 'helpers', routePath: '/components/helpers', component: HelpersSection },
];
