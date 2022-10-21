import React from 'react';

import { Container, H1, H3, P, Span } from './styles';


interface HeaderProps {
  studentsCounter: number;
}

export function Header({ studentsCounter }: HeaderProps) {
  
  return (
    <Container>
      <H1>Pilates</H1>
      <H3 >
        <P>
          você tem:    
        </P>
        <Span>
          {studentsCounter} alunos
        </Span>
      </H3>
    </Container>
  )
}

