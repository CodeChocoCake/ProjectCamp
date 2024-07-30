export const metadata = {
    title: 'blogDetail',
};

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div style={{ border: '5px solid green', padding: '10px' }}>
                {children}
            </div>
        </>
    );
}
