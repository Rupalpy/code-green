
const Layout = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to our Carbon Footprint Calculator!</h2>
        <p className="text-lg">Our website helps you calculate and understand your carbon footprint, empowering you to make environmentally conscious choices.</p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="m-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-screen h-screen">
            <img src="path_to_your_image1.jpg" alt="Image 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-lg font-bold text-white">Image 1 Description</p>
            </div>
          </div>
        </div>
        <div className="m-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-screen h-screen">
            <img src="path_to_your_image2.jpg" alt="Image 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-lg font-bold text-white">Image 2 Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
