import { BarChartBig, BookImage, Home, LogOut } from "lucide-react";

export const sidebarIcons = [
    {
        name: "TRANG CHỦ",
        icon: <Home size={20} strokeWidth={1} />,
        link: '/manage'
    },
    {
        name: "BÀI VIẾT",
        icon: <BookImage size={20} strokeWidth={1} />,
        link: '/manage/posts'
    },
    {
        name: "TÀI KHOẢN",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-user"><rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="12" cy="10" r="3" /><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /></svg>,
        link: '/manage/accounts'
    },
    {
        name: "THỐNG KÊ",
        icon: <BarChartBig size={20} strokeWidth={1} />,
        link: '/manage/statistics'
    },
    {
        name: "ĐĂNG XUẤT",
        icon: <LogOut size={20} strokeWidth={1} />,
        link: '/logout'
    },
]
