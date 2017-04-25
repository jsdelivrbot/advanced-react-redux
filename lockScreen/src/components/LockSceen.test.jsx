import React from 'react';
import {mount} from 'enzyme';
import LockScreen from './LockScreen';
import ClockDisplay from './ClockDisplay';
import SlideToUnlock from './SlideToUnlock';
import TopOverlay from './TopOverlay';

describe("LockScreen", () => {
	let props;
	let mountedLockScreen;
	
	const lockScreen = () => {
		if(!mountedLockScreen){
			mountedLockScreen = mount(
				<LockScreen {...props} />
			)
		}

		return mountedLockScreen;
	}

	beforeEach(() => {
		props = {
			wallpaperPath: undefined,
			userInfoMessage: undefined,
			onUnlocked: undefined
		};

		mountedLockScreen = undefined;
	});

	it("always renders a div", () => {
		const divs = lockScreen().find("div");

		expect(divs.length).toBeGreaterThan(0);
	});

	describe("the rendered div", () => {
		it("contains everything else that gets rendered", () => {
			const divs = lockScreen().find("div");

			const wrappingDiv = divs.first();

			expect(wrappingDiv.children()).toEqual(lockScreen().children());
		})
	});

	it("always renders a `clockDisplay`", () => {
		expect(lockScreen().find(ClockDisplay).length).toBe(1);
	});

	describe("rendered `ClockDisplay`", () => {
		it("does not receive any props", () => {
			const clockDisplay = lockScreen().find(ClockDisplay);

			expect(Object.keys(clockDisplay.props()).length).toBe(0);
		})
	});

	it("always render a `SlideToUnlock`", () => {
		expect(lockScreen().find(SlideToUnlock).length).toBe(1);
	});

	describe("When `onUnlocked` is defined", () => {
		beforeEach(() => {
			props.onUnlocked = jest.fn();
		});

		it("sets the rendered `SlideToUnlock`'s `onSlide` prop to the same value as `onUnlocked`'", () => {
			const slideToUnlock = lockScreen().find(SlideToUnlock);
			expect(slideToUnlock.props().onSlide).toBe(props.onUnlocked);
		});
	});

	describe("When `onUnlocked` is undefined", () => {
		beforeEach(() => {
			props.onUnlocked = undefined;
		});

		it("sets the rendered `SlideToUnlock`'s `onSlide` prop to undefined", () => {
			const slideToUnlock = lockScreen().find(SlideToUnlock);
			expect(slideToUnlock.props().onSlide).not.toBeDefined();
		})
	});

	describe("When `wallpaperPath` is passed", () => {
		beforeEach(() => {
			props.wallpaperPath = "some/image.png";
		});

		it("applies that wallpaper as a background-image on the wrapping div", () => {
			const wrappingDiv = lockScreen().find("div").first();
			expect(wrappingDiv.props().style.backgroundImage).toBe(`url(${props.wallpaperPath})`);
		});
	});

	describe("When `userInfoMessage` is passed", () => {
		beforeEach(() => {
			props.userInfoMessage = "This is my favorite phone!";
		});

		it("render a `TopOverlay`", () => {
			expect(lockScreen().find(TopOverlay).length).toBe(1);
		});

		it("passes `userInfoMessage` to the rendered `TopOverlay` as `children`", () => {
			const topOverlay = lockScreen().find(TopOverlay);
			expect(topOverlay.props().children).toBe(props.userInfoMessage);
		});
	});

	describe("When `userInfoMessage` is undefined", () => {
		beforeEach(() => {
			props.userInfoMessage = undefined;
		});

		it("does not render a `TopOverlay`", () => {
			expect(lockScreen().find(TopOverlay).length).toBe(0);
		})
	})
})






