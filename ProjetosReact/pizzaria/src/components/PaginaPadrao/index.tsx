import React from 'react';
import styles from './paginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import {Outlet} from 'react-router-dom';

export default function PaginaPadrao(){
  return(
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet></Outlet>
      </div>
    </>
  );
}