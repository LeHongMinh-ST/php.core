<?php

namespace App\Core;

class File
{
    public static function upload($target_dir, $input_name, $max_size, $formats_allowed_array) {
        $filename = strtotime(date('Y-m-d H:i:s')) . '.' . pathinfo(basename($_FILES[$input_name]["name"]), PATHINFO_EXTENSION);
        $target_file = $target_dir . "/" . $filename;
        $uploadOk = 1;

        $imageFileType = strtolower(pathinfo(basename($_FILES[$input_name]["name"]), PATHINFO_EXTENSION));
        $error_arr = array();

        $formats_allowed_array_new = [];

        foreach ($formats_allowed_array as $value) {
            $formats_allowed_array_new[] = strtolower($value);
        }

        // Check file size
        if ($_FILES[$input_name]["size"] > $max_size) {
            $error_arr[] = "Sorry, your file is too large.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if (!in_array($imageFileType, $formats_allowed_array_new)) {
            $error_arr[] = "Sorry, only " . implode(array_values($formats_allowed_array), ',') . " files are allowed.";
            $uploadOk = 0;
        }

        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            $error_arr[] = "Sorry, your file was not uploaded.";
            // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES[$input_name]["tmp_name"], getcwd() . DIRECTORY_SEPARATOR . $target_file)) {
                return $target_file;
            } else {
                $error_arr[] = "Sorry, there was an error uploading your file.";
            }
        }
        return $error_arr;
    }
}