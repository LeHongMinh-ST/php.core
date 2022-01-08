<?php
if (! defined('TI_VIEWS_DIR') ) {
    if (defined('APP_PATH')) {
        define('TI_VIEWS_DIR', APP_PATH . 'resource/views/');
    } else {
        define('TI_VIEWS_DIR', 'app/resource/views/');
    }
}

if (! ('TI_MARKER_EXTEND_BLOCK_HERE')) {
    define('TI_MARKER_EXTEND_BLOCK_HERE', '{{{[[[{[{[{[INSERT_BASE_DATA_HERE]}]}]}]]]}}}');

}

$GLOBALS['TI_EXTENDED_BASE_TEMPLATE_DATA'] = array();

$GLOBALS['TI_CURRENT_BLOCKNAME'] = '';

$GLOBALS['TI_CURRENT_BASE_TEMPLATE'] = '';
if (!function_exists('extend')) {
    function extend($filename)
    {
        var_dump(1);

        $GLOBALS['TI_CURRENT_BASE_TEMPLATE'] = $filename;
    }
}

if (!function_exists('endExtend')) {
    function endExtend()
    {
        if (isset($GLOBALS['CI'])) {
            $GLOBALS['CI']->load->view($GLOBALS['TI_CURRENT_BASE_TEMPLATE']);
        } else {
            include realpath(TI_VIEWS_DIR . $GLOBALS['TI_CURRENT_BASE_TEMPLATE']);
        }
    }
}

if (!function_exists('yields')) {
    function yields($blockname)
    {
        $GLOBALS['TI_CURRENT_BLOCKNAME'] = $blockname;

        ob_start();

        //end block
        $thisBlocksContent = ob_get_clean();

        if (array_key_exists($GLOBALS['TI_CURRENT_BLOCKNAME'], $GLOBALS['TI_EXTENDED_BASE_TEMPLATE_DATA'])) {

            $thisBlocksContent = str_replace(
                TI_MARKER_EXTEND_BLOCK_HERE,
                $thisBlocksContent,
                $GLOBALS['TI_EXTENDED_BASE_TEMPLATE_DATA'][$GLOBALS['TI_CURRENT_BLOCKNAME']]
            );
        }

        echo $thisBlocksContent;
    }
}


if (!function_exists('section')) {
    function section($blockname)
    {
        $GLOBALS['TI_CURRENT_BLOCKNAME'] = $blockname;

        ob_start();
    }
}

if (!function_exists('endSection')) {
    function endSection()
    {
        $thisBlocksContent = ob_get_clean();

        if (array_key_exists($GLOBALS['TI_CURRENT_BLOCKNAME'], $GLOBALS['TI_EXTENDED_BASE_TEMPLATE_DATA'])) {

            $thisBlocksContent = str_replace(
                TI_MARKER_EXTEND_BLOCK_HERE,
                $thisBlocksContent,
                $GLOBALS['TI_EXTENDED_BASE_TEMPLATE_DATA'][$GLOBALS['TI_CURRENT_BLOCKNAME']]
            );
        }
        $GLOBALS['TI_EXTENDED_BASE_TEMPLATE_DATA'][$GLOBALS['TI_CURRENT_BLOCKNAME']] = $thisBlocksContent;
    }
}


if (!function_exists('getExtendedBlock')) {
    function getExtendedBlock()
    {
        echo TI_MARKER_EXTEND_BLOCK_HERE;
    }
}

if (!function_exists('blockRenderingNeccessary')) {
    function blockRenderingNeccessary()
    {

        if (!array_key_exists($GLOBALS['TI_CURRENT_BLOCKNAME'], $GLOBALS['TI_EXTENDED_BASE_TEMPLATE_DATA'])) {
            return true;
        }

        if (false === strpos($GLOBALS['TI_EXTENDED_BASE_TEMPLATE_DATA'][$GLOBALS['TI_CURRENT_BLOCKNAME']], TI_MARKER_EXTEND_BLOCK_HERE)) {
            return false;
        } else {
            return true;
        }
    }
}
