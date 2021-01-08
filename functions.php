<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// require_once get_template_directory() . '/includes/styles-scripts.php';

// require_once dirname(__FILE__) . '/includes/remove-understrap-scripts.php';

require_once dirname(__FILE__) . '/includes/enqueue-styles.php';

require_once dirname(__FILE__) . '/includes/custom-post-types.php';

require_once dirname(__FILE__) . '/includes/navigation-menus.php';

require_once dirname(__FILE__) . '/includes/custom-excerpt.php';

require_once dirname(__FILE__) . '/includes/taxonomies.php';

require_once dirname(__FILE__) . '/includes/theme-supports.php';
