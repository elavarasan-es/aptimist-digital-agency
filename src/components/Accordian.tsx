// CustomAccordion.tsx
import React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Styled icon wrapper (expand/collapse)


interface CustomAccordionProps {
  panelKey: string;
  expanded: string | false;
  onChange: (panel: string) => void;
  summary: React.ReactNode;
  details: React.ReactNode;
  besideIcon?: React.ReactNode;
}

export default function CustomAccordion({
  panelKey,
  expanded,
  onChange,
  summary,
  details,
  besideIcon,
}: CustomAccordionProps) {
  const isExpanded = expanded === panelKey;
const ExpandIconWrapper = styled('div')({
  backgroundColor:isExpanded ?  '#38C6C6' : 'gray',
  borderRadius: '50%',
  padding: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
});

// Custom AccordionSummary with bottom border when expanded
const CustomAccordionSummary = styled(AccordionSummary)(() => ({
  '&.Mui-expanded': {
    borderBottom: `3px solid '#38C6C6'`,
    color:'#38C6C6'
  },
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  borderBottom:'1px solid gray'
}));

// Custom AccordionDetails with sky blue background
const CustomAccordionDetails = styled(AccordionDetails)({
  backgroundColor: '#e0f6f6',
  padding: '16px',
  borderRadius: '4px',
});

//optional icon
const SummaryContentWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const SummaryContentIcon = styled('div')({
  backgroundColor:isExpanded ?  '#38C6C6' : 'gray',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
});
  return (
    <Accordion expanded={isExpanded} onChange={onChange(panelKey)}>
      <CustomAccordionSummary
        expandIcon={
          <ExpandIconWrapper>
            {isExpanded ? <RemoveIcon /> : <AddIcon />}
          </ExpandIconWrapper>
        }
        aria-controls={`${panelKey}-content`}
        id={`${panelKey}-header`}
      >
        <SummaryContentWrapper>
         <SummaryContentIcon> {besideIcon && <div>{besideIcon}</div>}</SummaryContentIcon>
          <Typography component="span">{summary}</Typography>
        </SummaryContentWrapper>
      </CustomAccordionSummary>
      <CustomAccordionDetails>
        <Typography>{details}</Typography>
      </CustomAccordionDetails>
    </Accordion>
  );
}
