const input = [
    {
      from: 'СПБ',
      to: 'Минск',
    },
    {
      from: 'Киев',
      to: 'Новосибирск',
    },
    {
      from: 'Череповец',
      to: 'Москва',
    },
    {
      from: 'Минск',
      to: 'Киев',
    },
    {
      from: 'Москва',
      to: 'СПБ',
    },
  ];
  
  const sortTickets = input => {
    if (!input || input.length < 2) {
      return input;
    }
  
    const hash = {};
    const toHash = {};
  
    for (const ticket of input) {
      hash[ticket.from] = ticket;
      toHash[ticket.to] = true;
    }
  
    const result = input.filter(({ from }) => !toHash[from]);
  
    for (let i = 0; i < Object.keys(hash).length - 1; i++) {
      const lastTicket = result.at(-1)['to'];
      const ticket = hash[lastTicket];
  
      result.push(ticket);
    }
  
    return result;
  };
  
  console.log(sortTickets(input));