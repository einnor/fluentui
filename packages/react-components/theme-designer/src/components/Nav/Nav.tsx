import * as React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';
import { CircleRegular, ChevronRightRegular } from '@fluentui/react-icons';
import { Text, Menu, MenuTrigger, MenuButton, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components';

import { Theme, BrandVariants } from '@fluentui/react-theme';

export interface NavProps {
  className?: string;
  brand: BrandVariants;
  darkTheme: Theme;
  lightTheme: Theme;
}

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 3fr 3fr',
    height: '40px',
  },
  logo: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  element: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  export: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '20px',
  },
});

export const Name = () => {
  const styles = useStyles();
  return (
    <div className={styles.element}>
      <Text>Untitled</Text>
    </div>
  );
};

export const ExportButton = () => {
  const styles = useStyles();
  return (
    <div className={styles.export}>
      <Menu>
        <MenuTrigger>
          <MenuButton size="small" appearance="outline">
            Save
          </MenuButton>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem>TBD</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
};

export const Nav: React.FC<NavProps> = props => {
  const styles = useStyles();
  return (
    <FluentProvider theme={webDarkTheme} className={mergeClasses(styles.root, props.className)}>
      <div className={styles.logo}>
        <CircleRegular />
        <Text>Color Tool</Text>
      </div>
      <div className={styles.element}>
        UI Colors <ChevronRightRegular /> New palette
      </div>
      <Name />
      <ExportButton />
    </FluentProvider>
  );
};
