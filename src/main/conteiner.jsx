import React from 'react'
import Cartao from './cartao'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Emojify from 'react-emojione';

import jhony from '../img/jhony.jpg';
import paty from '../img/paty.jpg';
import familia from '../img/familia.jpg';
import birbs from '../img/birbs.jpg';
import harpia from '../img/harpia.jpg';
import gallah from '../img/gallah.jpg';
import conure from '../img/conure.jpg';
import cinza from '../img/cinza.jpg';
import mandarim from '../img/mandarim.jpg';
import black from '../img/black.jpg';
import araraazul from '../img/araraazul.jpg';
import calopsita from '../img/calopsita.jpg';
import coruja from '../img/coruja.jpg';
import lovebird from '../img/lovebird.jpg';
import periquito from '../img/periquito.jpg';
import papagaio from '../img/papagaio.jpg';
import ringneck from '../img/ringneck.jpg';

export default props => 
<div style={{ flexGrow: 1, textAlign: 'left'}}>
    <div style={{ flexGrow: 1, margin: '2vh', textAlign: 'left', marginTop: '5vh'}}>
        <Typography variant="h2" component="h2" style={{ fontWeight: '400'}}> 
            Sobre o Jhony:
        </Typography>
    </div>
    <div style={{ flexGrow: 1, margin: '2vh', marginTop: '5vh'}}>
      <Grid container spacing={6}  direction="row"
        justify="space-evenly"
        alignItems="stretch">
        <Grid item sm>
            <Paper style={{ padding: '2vh', float: 'left', fontSize: '1.4em'}}>
                <Avatar style={{float: 'left', margin: 10, width: 100, height: 100,}} alt='Foto Jhony' src={jhony} /> 
                <Avatar style={{float: 'right', margin: 10, width: 100, height: 100, clear: 'left'}} alt="Minha esposa paty" src={paty}  /> 

                Uma pessoa apaixonada por pássaros, especificamente os psitacídeos! Já deve ter percebido isso pelo meu site. <Emojify style={{height: 20, width: 20}}><span aria-label="hehe" role="img">😅 </span></Emojify>
                 Além de amar os "penosos" gosto muito de jogar 
                videogames e assistir animes, como qualquer adolescente beirando os 30 anos. <Emojify style={{height: 20, width: 20}}><span aria-label="maybe" role="img">🙃 </span></Emojify> 
                Sou formado em analise e desenvolvimento de sistemas pela UNINTER em 2018 com o mérito de melhor aluno do curso, 
                Iniciei recentemente minha pós graduação em desenvolvimento mobile. <Emojify style={{height: 20, width: 20}}><span aria-label="formado" role="img">🎓</span></Emojify> Tenho 3 anos de experiência em desenvolvimento sendo 2 como full-stack, trabalhando com frameworks como YII, Codeigniter e Zend, 
                utilizando PHP, JS, JQuery, Bootstrap, HTML, com banco de dados PostgreSQL, MySQL e MSSQL. Tambem estudo novas tecnologias como nodejs, react e serverless na aws (Esse site é o início). <Emojify style={{height: 20, width: 20}}><span aria-label="pc" role="img">💻 </span></Emojify> 
                 Anteriormente já atuei como analista de negociação por 5 anos, e sempre gosto de lembrar da minha honra ao mérito conquistada no Exército Brasileiro. 
                Todo meu esforço e dedicação é para que eu consiga alcançar um reconhecimento profissional, em uma instituição que tenha orgulho de mim, 
                não deixando de lado minha família, e minhas ambições particulares. <Emojify style={{height: 20, width: 20}}><span aria-label="feliz" role="img">😊</span></Emojify>

            </Paper>
        </Grid>
        <Grid item sm >
        <Paper style={{ padding: '2vh', float: 'left', fontSize: '1.4em', height: "100%"}}>
            <Avatar style={{float: 'left', margin: 10, width: 100, height: 100,}} alt="Minha familia" src={familia} /> 
            <Avatar style={{float: 'right', margin: 10, width: 100, height: 100, clear: 'left'}} alt="Meus bebes" src={birbs} /> 
            <div>
                Aqui é um agradecimento a minha família, que sempre foi base de tudo para mim. <Emojify style={{height: 20, width: 20}}><span aria-label="familia" role="img">👪</span></Emojify>
                Tenho dois irmãos, o Lucas é calmo e perceptivo sua inteligência me impressiona! 
                O Maicon não fica atrás, é sempre bem disposto e eu gostaria de ser popular como ele. 
                Minha mãe Matilde, me impressionou bastante ultimamente, depois de todas as dificuldades ela continuou confiante, sempre se importou comigo. 
                Meu pai Altamir, que infelizmente não está comigo, é a maior parte da minha inspiração, viveu sua vida inteira para a família e me apoiou em todos os momentos. 
                <Emojify style={{height: 20, width: 20}}><span aria-label="forca" role="img">💪</span></Emojify> Sou casado com a Paty, é uma pessoa excelente, ela é muito prestativa e atenciosa, futura advogada. 
                <Emojify style={{height: 20, width: 20}}><span aria-label="beijo" role="img">💏</span></Emojify> Também agradeço a todas as outras pessoas que me conheceram em algum momento  e certamente cada experiência ajudou a me tornar uma pessoa melhor. 
                Meus "filhos de penas" Doug e Juny (na foto), e Bob e Lisa, apesar de bagunceiros deixam minha cada mais agitada e alegre . <Emojify style={{height: 20, width: 20}}><span aria-label="pomba" role="img">🕊️</span></Emojify>
                <br/><span style={{float: 'right'}}>Amo todos <Emojify style={{height: 20, width: 20}}><span aria-label="coracao" role="img"> ❤️</span></Emojify></span>
            </div>
        </Paper>
        </Grid>
      </Grid>
    </div>
    <div style={{ flexGrow: 1, margin: '2vh', textAlign: 'left', marginTop: '5vh'}}>
        <Typography variant="h2" component="h2" style={{ fontWeight: '400'}}>
            Projetos:
        </Typography>
    </div>
    <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
    >
        <Cartao 
            titulo='Calculadora'
            title='Arara Azul Grande'
            conteudo='Primeiro projeto usando react, utilizado create-react-app para a estrutura.' 
            img={araraazul}
            linkGit='https://github.com/jhonylara/CalculadoraReact'
            linkLive='https://calculadora.jhonylara.com.br'
            tecnologias={['react', 'aws']}
        />
        <Cartao 
            titulo='Agenda de Tarefas'
            title='Cacatua Black Palm '
            conteudo='Crud sem autenticação para cadastro de tarefas utilizando serverless e acessando uma api.' 
            img={black}
            linkGit='https://github.com/jhonylara/todo-react'
            linkLive='https://agenda.jhonylara.com.br'
            tecnologias={['react','node', 'aws']}
        />
        <Cartao 
            titulo='API - Agenda de Tarefas'
            title='Calopsita'
            conteudo='API que fornece dados para a Agenda de Tarefas, feita com node e axios.' 
            img={calopsita}
            linkGit='https://github.com/jhonylara/todo-react'
            linkLive='https://api.jhonylara.com.br/todos'
            tecnologias={['node', 'mongo', 'aws']}
        />
        <Cartao 
            titulo='Site pessoal (Esse mesmo)'
            title='Coruja Bufo-real'
            conteudo='Sitem com o intuito de promover meus projetos, minha homepage que ainda está em contrução.' 
            img={coruja}
            linkGit='https://github.com/jhonylara/inicio'
            linkLive='https://jhonylara.com.br'
            tecnologias={['react', 'aws']}
        />
        <Cartao 
            titulo='Birblator'
            title='Hapia Brasileira'
            conteudo='Calculadora com tema de pássaros em Java para dispositivos mobile android' 
            img={harpia}
            linkGit='https://github.com/jhonylara/Birblator'
            linkLive='https://play.google.com/store/apps/details?id=primeirobimestre.prova&hl=pt_BR'
            tecnologias={['java', 'android']}
        />
        <Cartao 
            titulo='Genius Of Zelda'
            title='Gallah'
            conteudo='Um jogo no estilo genius modificado com tema do Zelda, usado Java para dispositivos mobile android' 
            img={gallah}
            linkGit='https://github.com/jhonylara/GeniusOfZelda'
            linkLive=''
            tecnologias={['java', 'android']}
        />
        <Cartao 
            titulo='Lista telefônica'
            title='Periquito Australiano'
            conteudo='Projeto para a faculdade em Java, primeiro contato com a linguagem' 
            img={periquito}
            linkGit='https://github.com/jhonylara/ListaTelefonica'
            linkLive=''
            tecnologias={['java']}
        />
        <Cartao 
            titulo='CRUD - Codeigniter'
            title='Tiriba de cara suja'
            conteudo='Um crud feito em PHP com Codeigniter 3 para aprendizado do framework na ultima instituição que atuei.' 
            img={conure}
            linkGit='https://github.com/jhonylara/crud-codeigniter-3'
            linkLive=''
            tecnologias={['html', 'php', 'ci']}
        />
        <Cartao 
            titulo='CRUD - PHP'
            title='Cinza Africano'
            conteudo='Crud com PHP com intuido de aprendizado. Não está concluído.' 
            img={cinza}
            linkGit='https://github.com/jhonylara/crud-php-puro-e-ajax'
            linkLive=''
            tecnologias={['html', 'php', 'js']}
        />
        <Cartao 
            titulo='API REST VUE.JS'
            title='Pato Mandarim'
            conteudo='Tentativa de fazer uma API com Vue.js e Axios com Codeigniter e MySQL' 
            img={mandarim}
            linkGit='https://github.com/jhonylara/rest'
            linkLive=''
            tecnologias={['vue', 'ci', 'mysql']}
        />
        <Cartao 
            titulo='Gerenciador de Arquivos'
            title='Ringneck'
            conteudo='Projeto para a faculdade em Java, salvando arquivos em Blob no banco de dados infelizmente, primeiro contato com MVC' 
            img={ringneck}
            linkGit='https://github.com/jhonylara/GerenciadorDeArquivos'
            linkLive=''
            tecnologias={['java']}
        />
        <Cartao 
            titulo='API - GDR'
            title='Papagaio de cabeça amarela'
            conteudo='API em JavaEE, demoseile, wildfly e banco de dados postgresql hospedado no google cloud' 
            img={papagaio}
            linkGit='https://github.com/jhonylara/GDR-API-SERVER'
            linkLive=''
            tecnologias={['java', 'psql', 'google']}
        />
        <Cartao 
            titulo='Gerenciador De Requisitos'
            title='Pássaro do Amor'
            conteudo='Desenvolvido para a faculdade em equipe, primeiro contato com Angular porêm a maior parte do desenvolvimento não foi meu' 
            img={lovebird}
            linkGit='https://github.com/jhonylara/GDR-APP-FRONT'
            linkLive=''
            tecnologias={['angular']}
        />
    </Grid>
</div>