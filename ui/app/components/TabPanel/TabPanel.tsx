import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: CustomTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
    child1: React.ReactNode;
  }
  

export default function TabPanel({child1} : TabPanelProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'center',
          width: '70%',
          marginX: 'auto'
        }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ flexGrow: 1 }}>
          <Tab label="Game" {...a11yProps(0)} sx={{ marginX: 'auto' }}/>
          <Tab label="How to Play" {...a11yProps(1)} sx={{ marginX: 'auto' }} />
          <Tab label="About" {...a11yProps(2)} sx={{ marginX: 'auto' }}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {
            child1
        }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
