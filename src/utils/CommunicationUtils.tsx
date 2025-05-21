export const toMessageScore = (frequency?: string) => { 
    if (frequency === 'Normal') { 
      return 1; 
    } else if (frequency === 'Urgent') { 
      return 5; 
    } 
    return 0; 
  }; 
  
  export const toMessagePoint = (frequency?: string) => { 
    const pt = toMessageScore(frequency); 
    if (!pt) return ''; 
    return `${pt} Pts`; 
  };
  