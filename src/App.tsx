import * as C from './App.styles'
import { useState } from 'react';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'comprar pão', done: false },
    { id: 2, name: 'comprar bolo', done: false }
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        { /* area de add nova task */}

        <ul>
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </C.Area>
    </C.Container>
  );
}

export default App;