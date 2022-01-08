<?php

namespace App\Core;

class Validator
{
    protected $rule = [];

    protected $messages = [];

    protected $attributes = [];

    private $isValid = true;

    private $errors = [];

    public function getError()
    {
        return $this->errors;
    }


    public function isValid(): bool
    {
        return $this->isValid;
    }

    public function make(array $data, array $rules, array $message = [], array $attributes = [])
    {
        foreach ($rules as $name => $value) {
            $arrayRule = $value;
            if (gettype($value) == 'string') {
                $arrayRule = explode('|', $arrayRule);
            }

            foreach ($arrayRule as $key => $value) {
                if (is_callable($value)) {
                    $this->isValid = call_user_func_array($value, [$name, $data[$name] ?? null]);
                    return $this->extracted($name, $key, $attributes, $message[$key] ?? '');
                }

                $arrayValue = explode(':', $value);
                $rule = $arrayValue[0];

                $value = $arrayValue[1] ?? null;

                $checkValid = true;

                switch ($rule) {
                    case 'required':
                        $checkValid = $this->validateRequired($data, $name, $rule, $message['required'] ?? '', $attributes);
                        break;
                    case 'string':
                        $checkValid = $this->validateString($data, $name, $rule, $message['string'] ?? '', $attributes);
                        break;
                    case 'email':
                        $checkValid = $this->validateEmail($data, $name, $rule, $message['email'] ?? '', $attributes);
                        break;
                    case 'array':
                        $checkValid = $this->validateArray($data, $name, $rule, $message['array'] ?? '', $attributes);
                        break;
                    case 'integer':
                        $checkValid = $this->validateInteger($data, $name, $rule, $message['integer'] ?? '', $attributes);
                        break;
                    case 'boolean':
                        $checkValid = $this->validateBoolean($data, $name, $rule, $message['boolean'] ?? '', $attributes);
                        break;
                    case 'url':
                        $checkValid = $this->validateUrl($data, $name, $rule, $message['url'] ?? '', $attributes);
                        break;
                    case 'confirmed':
                        $checkValid = $this->validateConfirmed($data, $name, $rule, $message['confirmed'] ?? '', $attributes);
                        break;
                    case 'date':
                        $checkValid = $this->validateDate($data, $name, $rule, $message['date'] ?? '', $attributes);
                        break;
                    case 'max':
                        $checkValid = $this->validateMax($data, $name, $rule, $message['max'] ?? '', $attributes, $value);
                        break;
                    case 'min':
                        $checkValid = $this->validateMin($data, $name, $rule, $message['mix'] ?? '', $attributes, $value);
                        break;
                }

                if (!$checkValid) break;
            }
        }

        return $this->isValid();
    }

    private function validateArray(array $data, string $name, string $rule, string $message, array $attributes): bool
    {
        if (gettype($data[$name]) != 'array') {
            return $this->extracted($name, $rule, $attributes, $message);
        }

        return true;
    }

    private function validateString(array $data, string $name, string $rule, string $message, array $attributes): bool
    {
        if (gettype($data[$name]) != 'string') {
            return $this->extracted($name, $rule, $attributes, $message);
        }

        return true;
    }

    private function validateInteger(array $data, string $name, string $rule, string $message, array $attributes): bool
    {
        if (gettype($data[$name]) != 'integer') {
            return $this->extracted($name, $rule, $attributes, $message);
        }

        return true;
    }

    private function validateBoolean(array $data, string $name, string $rule, string $message, array $attributes): bool
    {
        if (gettype($data[$name]) != 'boolean') {
            return $this->extracted($name, $rule, $attributes, $message);
        }

        return true;
    }

    private function validateRequired(array $data, string $name, string $rule, string $message, array $attributes): bool
    {

        if (!isset($data[$name])) {
            return $this->extracted($name, $rule, $attributes, $message);
        }

        return true;


        return true;
    }

    private function validateEmail(array $data, string $name, string $rule, string $message, array $attributes): bool
    {

        if (!filter_var($data[$name], FILTER_VALIDATE_EMAIL)) {
            return $this->extracted($name, $rule, $attributes, $message);
        }
        return true;
    }

    private function validateUrl(array $data, string $name, string $rule, string $message, array $attributes): bool
    {
        if (!filter_var($data[$name], FILTER_VALIDATE_URL)) {
            return $this->extracted($name, $rule, $attributes, $message);
        }
        return true;
    }

    private function validateConfirmed(array $data, string $name, string $rule, string $message, array $attributes): bool
    {
        if ($data[$name] != $data[$name . '_confirmation']) {
            return $this->extracted($name, $rule, $attributes, $message);
        }
        return true;
    }

    private function validateDate(array $data, string $name, string $rule, string $message, array $attributes): bool
    {
        if (
            !(
                preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/", $data[$name]) ||
                preg_match("/^[0-9]{4}/(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])$/", $data[$name]) ||
                preg_match("/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-[0-9]{4}$/", $data[$name]) ||
                preg_match("/^(0[1-9]|[1-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/[0-9]{4}$/", $data[$name])
            )
        ) {
            return $this->extracted($name, $rule, $attributes, $message);
        }
        return true;
    }

    private function validateMax(array $data, string $name, string $rule, string $message, array $attributes, $value): bool
    {

        $type = gettype($data[$name]);
        switch ($type) {
            case 'string':
            case 'array':
                if ((count($data[$name]) > (int)$value)) {
                    return $this->extracted($name, $rule . $value, $attributes, $message);
                }
                break;
            case 'integer':
                if ((int)$data[$name] > (int)$value) {
                    return $this->extracted($name, $rule . 'number', $attributes, $message);
                }
                break;
        }

        return true;
    }

    private function validateMin(array $data, string $name, string $rule, string $message, array $attributes, $value): bool
    {
        $type = gettype($data[$name]);
        switch ($type) {
            case 'string':
            case 'array':
                if ((count($data[$name]) < (int)$value)) {
                    return $this->extracted($name, $rule . $value, $attributes, $message);
                }
                break;
            case 'integer':
                if ((int)$data[$name] < (int)$value) {
                    return $this->extracted($name, $rule . 'number', $attributes, $message);
                }
                break;
        }

        return true;
    }


    /**
     * @param string $name
     * @param array $attributes
     * @param string $message
     * @return false
     */
    private function extracted(string $name, string $rule, array $attributes, string $message = ''): bool
    {
        $this->isValid = false;
        $erors = include('app/resource/lang/validate.php');
        $key = $name;

        if (array_key_exists($name, $attributes)) {
            $key = $attributes[$name];
        }
        $mes = str_replace(':attribute', $key, $erors[$rule] ?? '');
        if ($message) {
            $mes = str_replace(':attribute', $key, $message);
        }

        $this->errors[$name] = $mes;

        return false;
    }

}