import {
  BiPaperPlane as ContactIcon,
  BiHomeSmile as HomeIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
  BiMessageDetail as ChatIcon,
} from 'react-icons/bi';
import { LuWorkflow } from 'react-icons/lu';
import { MenuItemType } from '@/types/navigation';

export const MENU_ITEMS: MenuItemType[] = [
  {
    title: 'Home',
    href: '/',
    icon: HomeIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
  },
  {
    title: 'About',
    href: '/about',
    icon: ProfileIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: ProjectIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
  },  
  {
    title: 'Roadmap',
    href: '/roadmap',
    icon: LuWorkflow,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Roadmap',
  },
  {
    title: 'Chat Room',
    href: '/chatroom',
    icon: ChatIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: ChatRoom',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: ContactIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
  },
];
