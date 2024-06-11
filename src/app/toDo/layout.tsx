import Header from '@/toDoApp/components/organisms/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
