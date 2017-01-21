<?php
/**
 * @file
 * site_configuration.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function site_configuration_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu_send-us-an-owl:contact.
  $menu_links['main-menu_send-us-an-owl:contact'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'contact',
    'router_path' => 'contact',
    'link_title' => 'Send Us An Owl',
    'options' => array(
      'attributes' => array(
        'title' => 'Contact us. ',
      ),
      'identifier' => 'main-menu_send-us-an-owl:contact',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 38,
    'customized' => 1,
  );
  // Exported menu link: management_administration:admin.
  $menu_links['management_administration:admin'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin',
    'router_path' => 'admin',
    'link_title' => 'Administration',
    'options' => array(
      'identifier' => 'management_administration:admin',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 9,
    'customized' => 0,
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Administration');
  t('Send Us An Owl');

  return $menu_links;
}
