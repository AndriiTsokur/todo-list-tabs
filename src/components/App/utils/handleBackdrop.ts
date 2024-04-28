export const handleBackdrop = (isModalVisible: boolean) => {
	if (isModalVisible) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
};
