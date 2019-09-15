import React, { Component } from 'react'
import { FaAws, FaVuejs } from 'react-icons/fa';
import { DiJava, DiJsBadge, DiPhp, DiHtml5, DiNodejs, DiCodeigniter, DiMysql,
    DiReact, DiMongodb, DiAngularSimple, DiGoogleCloudPlatform, DiPostgresql, DiAndroid } from 'react-icons/di';

export default class Tecnologias extends Component{
    constructor(props){
        super(props)
        this.state = { tecnologias: props.tecnologias}
    }

    verificarTecnologias(item){
        switch (item) {
            case 'java':
                return (<DiJava key={Math.random()} size='4em'/>)
            case 'js':
                return (<DiJsBadge key={Math.random()} size='4em'/>)
            case 'php':
                return (<DiPhp key={Math.random()} size='4em'/>)
            case 'html':
                return (<DiHtml5 key={Math.random()} size='4em'/>)
            case 'node':
                return (<DiNodejs key={Math.random()} size='4em'/>)
            case 'aws':
                return (<FaAws key={Math.random()} size='4em'/>)
            case 'ci':
                return (<DiCodeigniter key={Math.random()} size='4em'/>)
            case 'react':
                return (<DiReact key={Math.random()} size='4em'/>)
            case 'mongo':
                return (<DiMongodb key={Math.random()} size='4em'/>)
            case 'angular':
                return (<DiAngularSimple key={Math.random()} size='4em'/>)
            case 'google':
                return (<DiGoogleCloudPlatform key={Math.random()} size='4em'/>)
            case 'psql':
                return (<DiPostgresql key={Math.random()} size='4em'/>)
            case 'android':
                return (<DiAndroid key={Math.random()} size='4em'/>)
            case 'mysql':
                return (<DiMysql key={Math.random()} size='4em'/>)    
            case 'vue':
                return (<FaVuejs key={Math.random()} size='4em'/>)   
            default:
                return '';
        }
    }

    render(){
        if(this.state.tecnologias){
            return  (this.state.tecnologias.map(this.verificarTecnologias))
        }else{
            return ('')
        }

    }
  }