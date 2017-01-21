<?php
/**
 * @file
 * site_configuration.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function site_configuration_user_default_roles() {
  $roles = array();

  // Exported role: administrator.
  $roles['administrator'] = array(
    'name' => 'administrator',
    'weight' => 3,
  );

  // Exported role: reviewer.
  $roles['reviewer'] = array(
    'name' => 'reviewer',
    'weight' => 2,
  );

  return $roles;
}
