import { render, screen } from "@testing-library/react"
import Form from "./Form"
import userEvent from "@testing-library/user-event";


test("When submitting the form, it redirects to the detail page",
async ()=>{

    const user = userEvent.setup()

    //create fake moc function
const mockFn =jest.fn();

 render( <Form handleSubmit={mockFn}/>)

 //get input
const input= screen.getByPlaceholderText(/search/i)

// write down country name in input

await user.type(input, "germany")

// get button
const button = screen.getByRole("button")

// click the button
await user.click(button)

//check if the function has been invoked
expect(mockFn).toHaveBeenCalled()

})