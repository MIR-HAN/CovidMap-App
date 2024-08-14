
import { render } from "@testing-library/react"
import Error from "."
import userEvent from "@testing-library/user-event";

describe("error component tests",
    () => {

        const mockFn = jest.fn();
        const user = userEvent.setup();
        let errorComp;
        
        // render the component before each
        beforeEach(() => {
            errorComp = render(<Error message={"failed with status code of 404"} retry={mockFn} />)
        })

        // test 1-)
        test(" displays the correct error message",
            () => {

                errorComp.getByText(/failed with/i)


            })
        // test 2-)
        test("try again button works",
            async () => {
                const button = errorComp.getByRole("button")

                await user.click(button);

                expect(mockFn).toHaveBeenCalled();

            })



    })

