import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import ITag from "../../../interfaces/ITag"
import http from "../../../HTTP"
import IRestaurante from "../../../interfaces/IRestaurante"


const FormularioPrato = () => {
  const [nomePrato, setNomePrato] = useState('')
  const [descricao, setDescricao] = useState('')

  

  const [restaurante, setRestaurante] = useState('')
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  const [tag, setTag] = useState('')
  const [tags, setTags] = useState<ITag[]>([])


  useEffect(() => {
    http.get<{ tags: ITag[] }>('tags/')
      .then(resposta => setTags(resposta.data.tags))
    http.get<IRestaurante[]>('restaurantes/')
      .then(resposta => setRestaurantes(resposta.data))
  }, [])

  const [imagem, setImagem] = useState<File | null>(null)

  const SelecionaArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files?.length){
      setImagem(e.target.files[0])
    }else{
      setImagem(null)
    }
  }

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    const formData = new FormData();
    formData.append('nome', nomePrato)
    formData.append('descricao', descricao)
    formData.append('tag', tag)
    formData.append('restaurante', restaurante)
    if(imagem){
      formData.append('imagem', imagem)
    }
    http.request({
      url: 'pratos/',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
      .then(() => alert('Prato cadastrado com sucesso!'))
      .catch(erro => console.log(erro))
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
        <Typography component="h1" variant="h6">Formulario de Prato</Typography>
        <Box component="form" sx={{ width: '80%' }} onSubmit={aoSubmeterForm}>
          <TextField
            value={nomePrato}
            onChange={evento => setNomePrato(evento.target.value)}
            id="standard-basic"
            label="Nome do Prato"
            variant="standard"
            fullWidth
            required
            margin="dense"
          />
          <TextField
            value={descricao}
            onChange={evento => setDescricao(evento.target.value)}
            id="standard-basic"
            label="Descricao"
            variant="standard"
            fullWidth
            required
            margin="dense"
          />
          <FormControl margin='dense' fullWidth>
            <InputLabel id="select-tag">Tag</InputLabel>
            <Select labelId="select-tag" value={tag} onChange={evento => setTag(evento.target.value)}>
              {tags.map(tag => <MenuItem key={tag.id} value={tag.value}>
                {tag.value}
              </MenuItem>)}
            </Select>
          </FormControl>

          <FormControl margin='dense' fullWidth>
            <InputLabel id="select-restaurante">Restaurante</InputLabel>
            <Select labelId="select-restaurante" value={restaurante} onChange={e => setRestaurante(e.target.value)}>
                {restaurantes.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>
                  {restaurante.nome}
                </MenuItem>)}
            </Select>
          </FormControl>

          <input type="file" onChange={SelecionaArquivo}></input>

          <Button
            type='submit'
            variant="outlined"
            fullWidth
            sx={{ marginTop: 1 }}>
            Outlined
          </Button>
        </Box>
      </Box>
    </>

  )
}

export default FormularioPrato