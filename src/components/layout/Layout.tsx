import * as React from 'react';
import classes from './Layout.module.scss';
import { Header } from '../header/Header';

interface LayoutProps {
  title: string
  children?: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({children, title}) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>
        <h1>{ title }</h1>
        { children }
      </main>
    </div>
  )
}
