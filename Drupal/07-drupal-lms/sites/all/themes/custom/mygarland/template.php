<?php

function mygarland_preprocess_page(&$vars) {
// Hook into color.module
if (module_exists('color')) {
_color_page_alter($vars);
}
}