/* eslint-disable react/jsx-props-no-spreading */
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabsCP from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

import TabsStyledContainer from './Tabs.style'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface TabsPropsI {
  tabs: {
    name: string
    children: JSX.Element
    disabled?: boolean
  }[]
  className?: string
  activeTab: number
  setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function Tabs({ tabs, className, activeTab, setActiveTabIndex }: TabsPropsI) {
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTabIndex(newValue)
  }

  return (
    <TabsStyledContainer className={className}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabsCP value={activeTab} onChange={handleChange} aria-label='basic tabs example'>
          {tabs?.map((tab, index) => (
            <Tab label={tab?.name} {...a11yProps(index)} disabled={tab.disabled} key={index} />
          ))}
        </TabsCP>
      </Box>
      {tabs?.map((tab, index) => (
        <TabPanel value={activeTab} index={index} key={index}>
          {tab?.children}
        </TabPanel>
      ))}
    </TabsStyledContainer>
  )
}
