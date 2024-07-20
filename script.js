document.addEventListener('DOMContentLoaded', () => {
    let generatedOtp;

    function generateOTP() {
        const otp = Math.floor(100000 + Math.random() * 900000);
        return otp.toString();
    }

    function validateOTP(inputOtp, actualOtp) {
        return inputOtp === actualOtp;
    }

    document.getElementById('generateOtpBtn').addEventListener('click', () => {
        generatedOtp = generateOTP();
        document.getElementById('generatedOtp').textContent = `Generated OTP: ${generatedOtp}`;
    });

    document.getElementById('validateOtpBtn').addEventListener('click', () => {
        const userInputOtp = document.getElementById('otpInput').value;
        const validationResult = validateOTP(userInputOtp, generatedOtp);

        if (validationResult) {
            document.getElementById('validationResult').textContent = "OTP is valid.";
        } else {
            document.getElementById('validationResult').textContent = "OTP is invalid.";
        }
    });
});
