import { render, screen, fireEvent } from "@testing-library/react";


import "@testing-library/jest-dom";


import About_Us from '../components/homepage/about_us'
import Carousel_Comp from '../components/homepage/Carousel_comp'
import Featured_Products from '../components/homepage/Featured_Products'
import H_Divider from '../components/homepage/H_Divider'


//mock for ResizeObserver, for fireEvent to work on Mantine React components
window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));

global.CSSObject = jest.fn()



describe("Homepage", () => {
    it('about us component rendered', () => {
        render(<About_Us />);

        
        
      
        expect(screen.getByText('Upscale Printing Solutions')).toBeInTheDocument();
          
      
    });
      
        
});