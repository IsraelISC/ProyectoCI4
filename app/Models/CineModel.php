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
    public function listPeliculas()
    {
        $sql = "CALL showPeliculas()";
        $query = $this->db->query($sql);
        $result = $query->getResultArray();
        // Verificar si trajo algun dato
        if (!empty($result)) {
            // Devolver el resultado en formato JSON
            return json_encode($result);
        } else {
            return "No Data";
        }
    }
}