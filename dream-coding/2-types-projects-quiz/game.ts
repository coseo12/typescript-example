{
  /**
   * Let's make a game 🕹
   */

  type Position = {
    x: number;
    y: number;
  };

  type Operator = 'up' | 'down' | 'left' | 'right';

  const position: Position = {
    x: 0,
    y: 0,
  };

  const move = (operator: Operator) => {
    switch (operator) {
      case 'up':
        position.y++;
        break;
      case 'down':
        position.y--;
        break;
      case 'left':
        position.x--;
        break;
      case 'right':
        position.x++;
        break;
      default:
        throw Error('Unknown operator');
    }
  };

  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}
