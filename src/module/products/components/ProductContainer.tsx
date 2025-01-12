import { Heading } from "@/components/ui/Heading"
import { useTranslation } from "react-i18next"
import CardProduct from "./CardProduct"


export const ProductContainer = () => {

  const {t} = useTranslation('ProductPage')

  return (
    <section id='sale'>
      <div className='w-10/12 mx-auto text-center pt-4'>
        <Heading>{t('Title')}</Heading>
      </div>
        <CardProduct />
    </section>
  )
}