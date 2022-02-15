import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";
import { Logo } from './../assets/Logo'


const Header = () => (
  <Flex justifyContent={'space-between'} alignItems={'center'} bgColor={'#fff'} marginTop='4'>
    <Logo boxSize="20" color="black" />
    <Breadcrumb>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
  </Flex>
)

export default Header;