<?php

namespace App\Controllers;

class CineUbam extends BaseController
{
    public function index(): string
    {
        return view('CineUbam');
    }
    public function agregarPelicula()
    {
        $nombre = $this->request->getPost('nombrePelicula');
        $pelicula = $this->request->getFile('imagenPelicula');
        $costo = $this->request->getPost('costoPelicula');

        if (empty($nombre) || empty($pelicula) || empty($costo)) {
            return "Campos Vacíos";
        } else {
            if ($pelicula->isValid() && !$pelicula->hasMoved()) {
                $extension = pathinfo($pelicula->getName(), PATHINFO_EXTENSION);
                if ($extension === 'jpg' || $extension === 'jpeg' || $extension === "png") {
                    if ($pelicula->getSize() <= 5 * 1024 * 1024) {
                        //Insertar los datos como nombre, costo y la imagen antes de movel

                        //Empezar a mover el archivo a un lugar
                        $pelicula->move(ROOTPATH . 'public/Images', $pelicula->getName());
                    } else {
                        return "El archivo es demasiado grande";
                    }
                } else {
                    return "El archivo no es un JPEG";
                }
            } else
                return $this->validator->getError("image");

        }

    }
}
