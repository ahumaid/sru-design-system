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
  { id: 'introduction', group: 'guide', labelKey: 'guide.introduction', routeName: 'introduction', routePath: '/', component: IntroductionSection },
  { id: 'getting-started', group: 'guide', labelKey: 'guide.gettingStarted', routeName: 'getting-started', routePath: '/guide/getting-started', component: GettingStartedSection },
  { id: 'installation', group: 'guide', labelKey: 'guide.installation', routeName: 'installation', routePath: '/guide/installation', component: InstallationSection },
  { id: 'ai-skill', group: 'guide', labelKey: 'guide.aiSkill', routeName: 'ai-skill', routePath: '/guide/ai-skill', component: AiSkillSection },
  { id: 'foundations', group: 'components', labelKey: 'nav.components.foundations', routeName: 'foundations', routePath: '/foundations', component: FoundationsSection },
  { id: 'brand-logos', group: 'components', labelKey: 'nav.components.logos', routeName: 'logos', routePath: '/components/logos', component: BrandLogosSection },
  { id: 'icons', group: 'components', labelKey: 'nav.components.icons', routeName: 'icons', routePath: '/components/icons', component: IconsSection },
  { id: 'accordion', group: 'components', labelKey: 'nav.components.accordion', routeName: 'accordion', routePath: '/components/accordion', component: AccordionSection },
  { id: 'alerts', group: 'components', labelKey: 'nav.components.alerts', routeName: 'alerts', routePath: '/components/alerts', component: AlertsSection },
  { id: 'badge', group: 'components', labelKey: 'nav.components.badge', routeName: 'badge', routePath: '/components/badge', component: BadgeSection },
  { id: 'breadcrumb', group: 'components', labelKey: 'nav.components.breadcrumb', routeName: 'breadcrumb', routePath: '/components/breadcrumb', component: BreadcrumbSection },
  { id: 'buttons', group: 'components', labelKey: 'nav.components.buttons', routeName: 'buttons', routePath: '/components/buttons', component: ButtonsSection },
  { id: 'button-group', group: 'components', labelKey: 'nav.components.button-group', routeName: 'button-group', routePath: '/components/button-group', component: ButtonGroupSection },
  { id: 'cards', group: 'components', labelKey: 'nav.components.cards', routeName: 'cards', routePath: '/components/cards', component: CardsSection },
  { id: 'carousel', group: 'components', labelKey: 'nav.components.carousel', routeName: 'carousel', routePath: '/components/carousel', component: CarouselSection },
  { id: 'close-button', group: 'components', labelKey: 'nav.components.close-button', routeName: 'close-button', routePath: '/components/close-button', component: CloseButtonSection },
  { id: 'collapse', group: 'components', labelKey: 'nav.components.collapse', routeName: 'collapse', routePath: '/components/collapse', component: CollapseSection },
  { id: 'dropdowns', group: 'components', labelKey: 'nav.components.dropdowns', routeName: 'dropdowns', routePath: '/components/dropdowns', component: DropdownsSection },
  { id: 'forms', group: 'components', labelKey: 'nav.components.forms', routeName: 'forms', routePath: '/components/forms', component: FormsSection },
  { id: 'list-group', group: 'components', labelKey: 'nav.components.list-group', routeName: 'list-group', routePath: '/components/list-group', component: ListGroupSection },
  { id: 'modal', group: 'components', labelKey: 'nav.components.modal', routeName: 'modal', routePath: '/components/modal', component: ModalSection },
  { id: 'navbar', group: 'components', labelKey: 'nav.components.navbar', routeName: 'navbar', routePath: '/components/navbar', component: NavbarSection },
  { id: 'navs', group: 'components', labelKey: 'nav.components.navs', routeName: 'navs', routePath: '/components/navs', component: NavsSection },
  { id: 'offcanvas', group: 'components', labelKey: 'nav.components.offcanvas', routeName: 'offcanvas', routePath: '/components/offcanvas', component: OffcanvasSection },
  { id: 'pagination', group: 'components', labelKey: 'nav.components.pagination', routeName: 'pagination', routePath: '/components/pagination', component: PaginationSection },
  { id: 'placeholders', group: 'components', labelKey: 'nav.components.placeholders', routeName: 'placeholders', routePath: '/components/placeholders', component: PlaceholdersSection },
  { id: 'popovers', group: 'components', labelKey: 'nav.components.popovers', routeName: 'popovers', routePath: '/components/popovers', component: PopoversSection },
  { id: 'progress', group: 'components', labelKey: 'nav.components.progress', routeName: 'progress', routePath: '/components/progress', component: ProgressSection },
  { id: 'scrollspy', group: 'components', labelKey: 'nav.components.scrollspy', routeName: 'scrollspy', routePath: '/components/scrollspy', component: ScrollspySection },
  { id: 'spinners', group: 'components', labelKey: 'nav.components.spinners', routeName: 'spinners', routePath: '/components/spinners', component: SpinnersSection },
  { id: 'tables', group: 'components', labelKey: 'nav.components.tables', routeName: 'tables', routePath: '/components/tables', component: TablesSection },
  { id: 'toasts', group: 'components', labelKey: 'nav.components.toasts', routeName: 'toasts', routePath: '/components/toasts', component: ToastsSection },
  { id: 'tooltips', group: 'components', labelKey: 'nav.components.tooltips', routeName: 'tooltips', routePath: '/components/tooltips', component: TooltipsSection },
  { id: 'helpers', group: 'components', labelKey: 'nav.components.helpers', routeName: 'helpers', routePath: '/components/helpers', component: HelpersSection },
];
