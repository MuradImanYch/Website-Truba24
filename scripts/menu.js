let catalog_burger = $('.card-burger');
    let catalog_menu = $('.catalog-menu');
    catalog_burger.on('click', () => catalog_menu.toggleClass('show'));

    let category = $('.popup-selected-categories-item>ul');
    let category_show = $('.catalog-menu');
    category.on('click', () => category_show.toggleClass('show'));


    let catalog_submenu_pipe = $('.catalog-nav-menu-submenu.pipe');
    let catalog_submenu_metal = $('.catalog-nav-menu-submenu.metal');
    let catalog_submenu_col_metal = $('.catalog-nav-menu-submenu.col-metal');
    let catalog_submenu_shut_valves = $('.catalog-nav-menu-submenu.shut-valves');
    let catalog_submenu_ferrou_metal = $('.catalog-nav-menu-submenu.ferrous-metal');
    let catalog_submenu_hardware_fasteners = $('.catalog-nav-menu-submenu.hardware-fasteners');
    let catalog_submenu_scrap = $('.catalog-nav-menu-submenu.scrap');
    let catalog_submenu_metal_products = $('.catalog-nav-menu-submenu.metal-products');
    let catalog_submenu_equipment_tools = $('.catalog-nav-menu-submenu.equipment-tools');
    let catalog_submenu_services = $('.catalog-nav-menu-submenu.services');


    $('.sub-menu-pipe').on('click', () => catalog_submenu_pipe.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-pipe').on('click', () => $('.sub-menu-pipe').toggleClass('bg-show'));
    $('.sub-menu-shut-valves').on('click', () => catalog_submenu_shut_valves.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-shut-valves').on('click', () => $('.sub-menu-shut-valves').toggleClass('bg-show'));
    $('.sub-menu-metal').on('click', () => catalog_submenu_metal.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-metal').on('click', () => $('.sub-menu-metal').toggleClass('bg-show'));
    $('.sub-menu-col-metal').on('click', () => catalog_submenu_col_metal.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-col-metal').on('click', () => $('.sub-menu-col-metal').toggleClass('bg-show'));
    $('.sub-menu-ferrous-metal').on('click', () => catalog_submenu_ferrou_metal.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-ferrous-metal').on('click', () => $('.sub-menu-ferrous-metal').toggleClass('bg-show'));
    $('.sub-menu-hardware-fasteners').on('click', () => catalog_submenu_hardware_fasteners.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-hardware-fasteners').on('click', () => $('.sub-menu-hardware-fasteners').toggleClass('bg-show'));
    $('.sub-menu-scrap').on('click', () => catalog_submenu_scrap.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-scrap').on('click', () => $('.sub-menu-scrap').toggleClass('bg-show'));
    $('.sub-menu-metal-products').on('click', () => catalog_submenu_metal_products.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-metal-products').on('click', () => $('.sub-menu-metal-products').toggleClass('bg-show'));
    $('.sub-menu-equipment-tools').on('click', () => catalog_submenu_equipment_tools.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-equipment-tools').on('click', () => $('.sub-menu-equipment-tools').toggleClass('bg-show'));
    $('.sub-menu-services').on('click', () => catalog_submenu_services.fadeToggle(300).toggleClass('catalog-submenu-show'));
    $('.sub-menu-services').on('click', () => $('.sub-menu-services').toggleClass('bg-show'));
    
    $('.popup-open').click(function() {
      $('.popup-fade').fadeIn();
       $('body,html').animate({scrollTop: 0}, 400)
      return false;
  }); 
  