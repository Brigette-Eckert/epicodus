<?php
/**
 * @file
 * site_configuration.features.contact_categories.inc
 */

/**
 * Implements hook_contact_categories_defaults().
 */
function site_configuration_contact_categories_defaults() {
  return array(
    'Feedback' => array(
      'category' => 'Feedback',
      'recipients' => 'brigette.eckert@live.com',
      'reply' => '',
      'weight' => 0,
      'selected' => 1,
    ),
    'product request' => array(
      'category' => 'product request',
      'recipients' => 'brigette.eckert@live.com',
      'reply' => 'Thank you. We have received your owl about a product request.  We will respond within 2 days, barring bookworms or other magical mayhem. ',
      'weight' => 0,
      'selected' => 0,
    ),
  );
}
