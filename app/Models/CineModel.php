<?php
namespace App\Models;

use CodeIgniter\Model;

class CineModel extends Model
{
    public function insertarPelicula($nombre, $url, $costo)
    {
        $sql = "CALL createPelicula(?, ?, ?)";
        $query = $this->db->query($sql, array($nombre, $url, $costo));
        // Verificar si la inserción fue exitosa
        if ($query) {
            return true;
        } else {
            return false;
        }
    }
}