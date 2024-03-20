<?php


if (!class_exists('ClassMenu_Walker_Nav_Menu')) {
    class ClassMenu_Walker_Nav_Menu extends Walker_Nav_Menu
    {
        protected $menuDesc = [];

        public function start_lvl(&$output, $depth = 0, $args = array())
        {
            if ($depth == 0) {
                //$output .= '<div class="row">';
            }
        }

        public function end_lvl(&$output, $depth = 0, $args = array())
        {
            if ($depth == 0) {
                // $output .= "</div>";
            }
        }

        /**
         * Starts the element output.
         *
         * @param string $output Used to append additional content (passed by reference).
         * @param WP_Post $item Menu item data object.
         * @param int $depth Depth of menu item. Used for padding.
         * @param stdClass $args An object of wp_nav_menu() arguments.
         * @param int $id Current item ID.
         * @see Walker::start_el()
         *
         * @since 3.0.0
         * @since 4.4.0 The {@see 'nav_menu_item_args'} filter was added.
         *
         */
        public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
        {
            $cssClass = join(" ", $item->classes) . ' nav-item';

            $cssClass = str_replace("current-menu-ancestor", "is-active", $cssClass);
            //$cssClass = str_replace("current-menu-item", " active", $cssClass);

            $hasChild = false;
            if (in_array('menu-item-has-children', $item->classes)) {
                $hasChild = true;
            }

            $aClass = 'nav-link';
            if (in_array('current-menu-item', $item->classes)) {
                $aClass .= ' active';
            }

            $item->url = changeUrlAsHospital($item->url);

            if ($depth == 0) {
                if ($hasChild) {
                    $parent_menu_li_class = ' dropdown';
                    $output .= '<li class="' . $cssClass . $parent_menu_li_class . ' ">';
                    $output .= '<a href="' . $item->url . '" class="nav-link dropdown-toggle" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">' . $item->title . '<img src="' . get_stylesheet_directory_uri() . '/assets/img/dropdown-arrow.svg" alt="" class="dropdoen-arrow"></a>';
                    $output .= '<ul class="dropdown-menu lg" aria-labelledby="navbarDropdownMenuLink">';
                } else {
                    $output .= "<li class='{$cssClass}'>";
                    $title = $item->title;
                    $output .= '<a href="' . $item->url . '" class="' . $aClass . '">' . $title . '</a>';
                }

            }


            if ($depth == 1) {
                if ($hasChild) {
                    $parent_menu_li_class = ' dropdown';
                    $output .= '<li class="' . $cssClass . $parent_menu_li_class . ' ">';
                    $output .= '<a href="' . $item->url . '" class="nav-link dropdown-toggle" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">' . $item->title . '<img src="' . get_stylesheet_directory_uri() . '/assets/img/dropdown-arrow.svg" alt="" class="dropdoen-arrow"></a>';
                    $output .= '<ul class="dropdown-menu lg" aria-labelledby="navbarDropdownMenuLink">';
                } else {
                    $output .= "<li>";
                    $output .= '<a href="' . $item->url . '" class="dropdown-item">' . $item->title . '</a>';
                }
            }

            if ($depth == 2) {
                $output .= "<li>";
                $output .= '<a href="' . $item->url . '" class="dropdown-item">' . $item->title . '</a>';
            }

        }

        public function end_el(&$output, $item, $depth = 0, $args = array())
        {
            $hasChild = false;
            if (in_array('menu-item-has-children', $item->classes)) {
                $hasChild = true;
            }

            if ($depth == 0) {
                if ($hasChild) {
                    $output .= '</ul>';
                    $output .= '</li>';
                } else {
                    $output .= '</li>';
                }
            }


            if ($depth == 1) {
                $parent_classes = get_post_meta($item->menu_item_parent, '_menu_item_classes', true);
                $isMegaMenu = in_array('mega-menu', $parent_classes);
                if (!$hasChild) {
                    $output .= '</li>';
                } else {
                    $output .= '</ul></li>';
                }
            }

            if ($depth == 2) {
                $output .= '</li>';
            }

        }


        /**
         * Starts the element output.
         *
         * @param string $output Used to append additional content (passed by reference).
         * @param WP_Post $item Menu item data object.
         * @param int $depth Depth of menu item. Used for padding.
         * @param stdClass $args An object of wp_nav_menu() arguments.
         * @param int $id Current item ID.
         * @see Walker::start_el()
         *
         * @since 3.0.0
         * @since 4.4.0 The {@see 'nav_menu_item_args'} filter was added.
         *
         */
        public function start_el_x(&$output, $item, $depth = 0, $args = array(), $id = 0)
        {

            $cssClasses = [];
            if ($depth == 0) $cssClasses[] = 'list-inline-item';

            if (in_array('menu-item-has-children', $item->classes)) {
                $cssClasses[] = 'menu-item-has-children';
            }
            //current-menu-item

            //var_dump($item);

            $atts = array();
            $atts['title'] = !empty($item->attr_title) ? $item->attr_title : '';
            $atts['target'] = !empty($item->target) ? $item->target : '';
            $atts['rel'] = !empty($item->xfn) ? $item->xfn : '';
            $atts['href'] = !empty($item->url) ? $item->url : '';

            $cssClasses = join(" ", $cssClasses);
            $output .= "<li class='{$cssClasses}'>";


            $attributes = '';
            foreach ($atts as $attr => $value) {
                if (!empty($value)) {
                    $value = ('href' === $attr) ? esc_url($value) : esc_attr($value);
                    $attributes .= ' ' . $attr . '="' . $value . '"';
                }
            }

            $output .= "<a {$attributes}>{$item->title}</a>";

        }
    }
}