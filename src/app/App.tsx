import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRoter } from './providers/router';
import './styles/index.scss';
import { Modal } from 'shared/ui/Modal/Modal';

export const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onCLose={() => setIsOpen(false)}>
                    lorem ipsum 1010101010010101
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRoter />
                </div>
            </div>
        </Suspense>
    );
};
