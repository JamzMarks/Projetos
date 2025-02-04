import React, { useEffect, useState } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Link } from "react-router-dom"
import http from "../../../HTTP"

const AdministracaoRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  useEffect(() => {
    http.get<IRestaurante[]>('restaurantes/')
      .then(resposta => setRestaurantes(resposta.data))
  }, [])

  const excluir = (restaurenteASerExcluido: IRestaurante) => {
    http.delete(`restaurantes/${restaurenteASerExcluido.id}/`)
      .then(() => {
        const listaRestaurente = restaurantes.filter(restaurante => restaurante.id !== restaurenteASerExcluido.id)
        setRestaurantes([...listaRestaurente])
      })
  }
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome
            </TableCell>
            <TableCell>
              Editar
            </TableCell>
            <TableCell>
              Excluir
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map(restaurante => <TableRow key={restaurante.id}>
            <TableCell>
              {restaurante.nome}
            </TableCell>
            <TableCell>
              [<Link to={`/admin/restaurantes/${restaurante.id}`}>Editar</Link>]
            </TableCell>
            <TableCell>
              <Button variant='outlined' color='error' onClick={(() => excluir(restaurante))}>
                Excluir
              </Button>
            </TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdministracaoRestaurantes