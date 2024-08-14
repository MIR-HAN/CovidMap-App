import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Detail from './index';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { storeData } from '../../constants';


// Create a mock store with middleware

const mockStore = configureStore([thunk]);

it("In case of loaders are rendering correctly",
    () => {
        // Create a fake store with the initial state
        const store = mockStore({
            isLoading: true,
            error: null,
            data: null
        })

        // Render the component with the mock store
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Detail />
                </BrowserRouter>
            </Provider>
        );

        // check if loaders are rendering
        screen.getAllByTestId("card-loader");
        screen.getByTestId("header-loader");

    });

it("In case of error components are rendering correctly",
    () => {

        // simulate error case
        const store = mockStore({
            isLoading: false,
            error: "Server responded with status code of 404(undefined)",
            data: null,
        });
        // render the component
        render(<Provider store={store}>
            <BrowserRouter>
                <Detail />
            </BrowserRouter>
        </Provider>);

        // check if component which include error message rendered
        screen.getByText(/Server responded/i);

    }
)

it("Cards are rendered if data exits",
    () => {

        const store = mockStore(storeData);

        render(<Provider store={store}>
            <BrowserRouter>
                <Detail />
            </BrowserRouter>
        </Provider>);

        // 1) are country details rendering?

        // get image
        const img = screen.getByRole("img")
        // check image source
        expect(img).toHaveProperty("src", storeData.data.country?.flags.png)
        // is country name rendered?
        const title = screen.getByTestId("country-title")
        // is country name correct?
        expect(title).toHaveTextContent(storeData.data.country.altSpellings[1])

        // 2) are cards rendering?

        //change object to array
        const covidArr = Object.entries(storeData.data.covid || {})
        //Are key and value rendered for each element in the array?

        covidArr.forEach((item) => {
            //check titles
            screen.getAllByText(item[0].split("_").join(" "));

            // are values correct
            screen.getAllByText(item[1])
        })

    })
