import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
export default function DeployCreate() {
  const [name, setName] = useState('');
  const [labels, setLabels] = useState('');
  const [replicas, setReplicas] = useState('');
  const [image, setImage] = useState('');
  const [containerPort, setContainerPort] = useState('');
  const [namespace, setNamespace] = useState('');
  const handleCreateClick = () => {
    const requestData = {
      name: name,
      labels: labels,
      replicas: parseInt(replicas),
      image: image,
      containerPort: parseInt(containerPort),
      namespace: namespace,
    };
   console.log(requestData)
    // Send POST request to the backend API
    // axios.post('your_backend_api_endpoint', requestData)
    //   .then((response) => {
    //     // Handle success, e.g., show a success message or redirect
    //     console.log('Deployment created successfully:', response.data);
    //   })
    //   .catch((error) => {
    //     // Handle error, e.g., show an error message
    //     console.error('Error creating Deployment:', error);
    //   });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       创建Deployment
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="命名"
            value={name}
            fullWidth
            variant="standard"
            onChange={(e)=>setName(e.target.value)}
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="labels"
            name="labels"
            label="标签"
            
            fullWidth
            variant="standard"
            value={labels}
            onChange={(e)=>setLabels(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}  sm={6}>
          <TextField
            id="replicas"
            name="replicas"
            fullWidth
            label="副本数量"
            variant="standard"
            value={replicas}
            onChange={(e)=>setReplicas(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="image"
            name="image"
            label="镜像名称"
            fullWidth
            variant="standard"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="containerPort"
            name="containerPort"
            label="容器端口"
            fullWidth
            variant="standard"
            value={containerPort}
            onChange={(e)=>setContainerPort(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="namespace"
            name="namespace"
            label="命名空间"
            fullWidth
            variant="standard"
            value={namespace}
            onChange={(e)=>setNamespace(e.target.value)}
          />
        </Grid >
        <Grid  item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" onClick={handleCreateClick}>创建</Button>
        </Grid>
       
   
      </Grid>
    </React.Fragment>
  );
}