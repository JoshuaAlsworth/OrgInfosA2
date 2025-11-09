import { AppBar, TitlePortal } from 'react-admin';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

export const MyAppBar = () => (
    <AppBar sx={{ backgroundColor: "#1f65c7ff" }}>
        <TitlePortal variant="body1" component="h3">Practice Exam</TitlePortal>
    </AppBar>
);