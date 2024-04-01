import BodyComponent from "../components/BodyComponent"
import JoinComponent from "../components/JoinComponent"
import PartnerComponent from "../components/PartnerComponent"
import ProductComponent from "../components/ProductComponent"
import TestimoniComponent from "../components/TestimoniComponent"
import NavbarComponent from "../components/NavbarComponent"

const HomePage = () => {
  return (
    <div>
      <NavbarComponent/>
      <BodyComponent/>
      <ProductComponent/>
      <PartnerComponent/>
      <TestimoniComponent/>
      <JoinComponent/>
    </div>
  )
}

export default HomePage