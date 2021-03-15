# ALAMI – QA Test
Full Name : Muhammad Luthfi<br>
Date : 15 March 2021<br>
Applied Position : QA Engineer

Welcome! Your next step to join our squad starts with this case.<br>
Please read carefully all the question according to your own thoughts. We really appreciate genuineness.<br>
So, let's begin!<br>

Jawablah pertanyaan-pertanyaan ini menurut pengalaman yang anda alami sebagai QA. Bagian A. Manual test
1. User requirement: User ingin melakukan pembelian makanan mcDonald di Go-Food dengan pembayaran menggunakan Go-Pay.
Buatlah test scenario dan test case baik positif maupun negatif sebanyak-banyaknya dari user requirement di atas.
2. Suatu hari, sebagai QA anda menemukan Bug di development ketika melakukan pengetesan. Untuk melaporkan bug yang anda temukan, anda harus membuat suatu dokumen Bug Report kepada atasan anda.
Buatlah satu contoh bug report yang akan anda laporkan kepada atasan anda
3. Sebelum memulai pengujian seorang tester biasanya membuat Test Plan agar proses testing berjalan terstruktur.
Sebutkan poin poin apa saja yang biasa terdapat pada test plan tsb
4. Ketika melakukan API test, apa saja yang perlu dilakukan/di-test?
5. Menurut Anda, apakah manual testing tetap dibutuhkan ketika perkembangan automation makin
pesat? jelaskan alasannya!
 
# Answers
### 1.
| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Results | Actual Results | Pass / Fail |
| --- | --- | --- | --- | --- | --- | --- |
| BUY-001 | Verify user already logged-in on apps | <ul><li>User open gojek apps</li><li>User login using phone number</li><li>User verification otp</li></ul> | <ul><li>Var phone_number = 085591365379 </li><li>var otp = *dynamic otp*</li></ul> | User directed to homepage dashboard | As Expected | PASS |
| BUY-002 | Verify  Name, Street Address, City, State is match | <ul><li>User open gojek apps</li><li>User enable location</li><li>User click "GoFood" icon<li>User use current location or input address</li></ul> | <ul><li>Var address = "*dynamic address* "</li></ul> | User directed to GoFood page with valid address | As Expected | PASS |
| BUY-003 | Verify location is enable | <ul><li>User open gojek apps</li><li>User disable location</li><li>User click "GoFood" icon</li></ul> |  | It shall give a pop-up message as "Enable your location service" | As Expected | PASS |
| BUY-004 | Ensure that user can add item and increase the quantity | <ul><li>User open gojek apps</li><li>User enable location</li><li>User click "GoFood" icon</li><li>User use current location or input address</li><li>User click button "Add"</li><li>User Click button "+" on the same item</li></ul> |  | All items should be increase as much as user click "+" | As Expected | PASS |
| BUY-005 | Ensure that user can add item and decrease the quantity | <ul><li>User open gojek apps</li><li>User enable location</li><li>User click "GoFood" icon</li><li>User use current location or input address</li><li>User click button "Add"</li><li>User Click button "+" on the same item</li><li>User click button "-" on the same item</ul> |  | All items should be decrease as much as user click "-" | As Expected | PASS |
| BUY-006 | Ensure that Checkout Address Page consists of all the details of the product such as Name, Quantity, Amount, etc. | <ul><li>User open gojek apps</li><li>User enable location</li><li>User click "GoFood" icon</li><li>User use current location or input address</li><li>User click button "Add"</li><li>User Click button "+" on the same item</li><li>User click button pop-up checkout</li></ul> |  | User going through checkout page | As Expected | PASS |
| BUY-007 | Verify that user has enough balance GoPay | <ul><li>User open gojek apps</li><li>User enable location</li><li>User click "GoFood" icon</li><li>User use current location or input address</li><li>User click button "Add"</li><li>User Click button "+" on the same item</li><li>User click button pop-up checkout</li><li>choose payment with Gopay</li></ul> |  | User going through tracking order page | As Expected | PASS |
| BUY-008 | Verify that user has not enough balance GoPay | <ul><li>User open gojek apps</li><li>User enable location</li><li>User click "GoFood" icon</li><li>User use current location or input address</li><li>User click button "Add"</li><li>User Click button "+" on the same item</li><li>User click button pop-up checkout</li><li>choose payment with Gopay</li><li>option split bill with cash automatically applied</ul> |  | User going through tracking order page with payment split bill between GoPay & Cash | As Expected | PASS |

### 2.
[LOGIN] Force close after successfully login (Mobile)
Details <br>
    Type:      🔴Bug<br>
    Priority:   🔺High<br>
    Envirountment : Server : Development<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OS : Android lollipop 5.0<br>
Description<br>
Summary:<br>
There are some Android users that facing a force close whenever they tried to Login with
correct username and correct password
Steps to Reproduce:<br>
1. Open application alamisharia on Android with OS lollipop 5.0 (using emulator)
2. Go to the login page
3. Input valid data for login
4. It should be automatically close the application<br>
Actual Result:<br>
User input valid data on login form<br>
((*screenshot login with valid data value*))<br>
Click login<br>
((*screenshot application force close*))<br>
Expected Result :<br>
All user should be able to access dashboard with condition logged-in
<screenshot dashboard and condition logged-in>

### 3.
Important aspects like test estimation, test scope, test strategy are documented in test plan, so it can be reviewed by management team and re-used for other projects. It deals with test coverage, scheduling, features to be tested, features not to be tested, estimation and resource management.

### 4.
There is 5 key you must know before API Testing
###### 1. REST vs SOAP
###### 2. Commonly used HTTP Methods
###### 3. HTTP Response codes
###### 4. Different tools available for API Testing

### 5.
When manual analyzers connected with the framework as how a client would, they can recognize ease of use issues and glitches.<br>
Human eyes can spot relevant, useful, visual, and ease of use bugs that robotization scripts may not recognize.<br>
Testing functionalities like motions, tap, shake, CAPTCHA, and video control based trigger activities utilizing mechanized scripts still require a parcel of exertion and time.<br>
The developing complexities of testing upgraded client encounter functionalities is one of the essential reasons why manual testing is still critical in dexterous ventures.<br>
Manual testing makes a difference us get it the issue in detail both conceptually and relevantly. It permits the analyzer to empathize end-users whereas analyzing the item.<br> 
Manual Analyzers type in exceedingly clear test reports that clarify the issue, the root cause, and recommend ideal ways to illuminate though Robotization test reports are basically objective.

 ## Bagian B. Automation test
Target QA : https://www.grocerycrud.com/demo/offices_management<br>
1. Buatlah sejumlah manual test yang mencakup operasi CRUD dan yang terkait. Pastikan penjelasan detail
untuk masing-masing test case seperti : pre conditions, steps, expected results. Format bebas.
2. Buatlah script yang melakukan otomasi atas manual test tsb. Bahasa yang boleh digunakan : Javascript (preferred)
 <ul><li>Java (preferred)</li><li>Python</li><li>Ruby</li></ul>
(Please avoid frameworks that only record test cases)
3. Kirimkan baik test manual maupun automation test ke GitHub.

# Answers
### 1.
| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Results | Actual Results | Pass / Fail |
| --- | --- | --- | --- | --- | --- | --- |
| CRT-001 | Ensure user can going through Add Office page | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Add Office"</li></ul> | | User directed to Add Office Page | As Expected | PASS |
| CRT-002 | Verify user fill all field with valid data | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Add Office"</li><li>User input all field</li><li>Click button "Save"</li></ul> | <ul><li>Var City = "Tangerang"<li>Var phone = 08213131</li><li>Var address1 = "jl1"</li><li>Var address2 = "jl2"</li><li>Var state = "Indonesia"</li><li>Var country = "Indonesia"</li><li>Var postal_code = 1234</li><li>Var territory = "Kota Tangerang"</li></ul> | It shall give a message as "Your data has been successfully stored into the database."| As Expected | PASS |
| CRT-003 | Verify user fill all field with valid data and directed to homepage | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Add Office"</li><li>User input all field</li><li>Click button "Save and go back to list"</li></ul> | <ul><li>Var City = "Tangerang"<li>Var phone = 08213131</li><li>Var address1 = "jl1"</li><li>Var address2 = "jl2"</li><li>Var state = "Indonesia"</li><li>Var country = "Indonesia"</li><li>Var postal_code = 1234</li><li>Var territory = "Kota Tangerang"</li></ul> | User successfully stored data into the database and directed to homepage| As Expected | PASS |
| CRT-004 | Verify user fill field "City" as mendatory item | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Add Office"</li><li>User let city field blank</li><li>Click button "Save and go back to list"</li></ul> | <ul><li>Var City = ""<li>Var phone = 08213131</li><li>Var address1 = "jl1"</li><li>Var address2 = "jl2"</li><li>Var state = "Indonesia"</li><li>Var country = "Indonesia"</li><li>Var postal_code = 1234</li><li>Var territory = "Kota Tangerang"</li></ul> | It shall give a message as "The City field is required." | As Expected | PASS |
| CRT-005 | Verify user can cancel input data| <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Add Office"</li><li>User fill all field</li><li>Click button "Cancel"</li><li>User click "OK" on windows alert</li></ul> | | User directed to Homepage | As Expected | PASS |
| CRT-006 | Ensure user can going through Edit Office page | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Edit"</li></ul> | | User directed to Edit Office Page | As Expected | PASS |
| CRT-007 | Verify user can edit data | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Edit"</li><li>User fill all field</li><li>User click button "Update changes"</li></ul> | <ul><li>Var City = "Jakarta"<li>Var phone = 08213131</li><li>Var address1 = "jl1"</li><li>Var address2 = "jl2"</li><li>Var state = "Indonesia"</li><li>Var country = "Indonesia"</li><li>Var postal_code = 1134</li><li>Var territory = "DKI JAKARTA"</li></ul> | It shall give a message as "Your data has been successfully updated. Go back to list" | As Expected | PASS |
| CRT-008 | Verify user can edit data and directed to homepage | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Edit"</li><li>User fill all field</li><li>User click button "Update and go back to list"</li></ul> | <ul><li>Var City = "Jakarta"<li>Var phone = 08213131</li><li>Var address1 = "jl1"</li><li>Var address2 = "jl2"</li><li>Var state = "Indonesia"</li><li>Var country = "Indonesia"</li><li>Var postal_code = 1134</li><li>Var territory = "DKI JAKARTA"</li></ul> | User successfully stored data into the database and directed to homepage | As Expected | PASS |
| CRT-009 | Verify user can not edit data without fill city | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Edit"</li><li>User let city blank</li><li>User click button "Update and go back to list"</li></ul> | <ul><li>Var City = ""<li>Var phone = 08213131</li><li>Var address1 = "jl1"</li><li>Var address2 = "jl2"</li><li>Var state = "Indonesia"</li><li>Var country = "Indonesia"</li><li>Var postal_code = 1134</li><li>Var territory = "DKI JAKARTA"</li></ul> | It shall give a message as "The City field is required." | As Expected | PASS |
| CRT-010 | Verify user can cancel edit data| <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Edit Office"</li><li>User fill all field</li><li>Click button "Cancel"</li><li>User click "OK" on windows alert</li></ul> | | User directed to Homepage | As Expected | PASS |
| CRT-011 | Verify user can delete data | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "Delete"</li><li>User click "OK" on windows alert</li></ul> | | User successfully delete a row of data | As Expected | PASS |
| CRT-012 | Ensure user can view data | <ul><li>User visit [Link Test](https://www.grocerycrud.com/demo/offices_management "Test Link") </li><li>User click button "View"</li></ul> | | User directed to Read Page | As Expected | PASS |