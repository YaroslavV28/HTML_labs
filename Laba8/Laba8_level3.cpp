#include <iostream>
#include <string>
using namespace std;

int main() { 
    system("chcp 65001"); 


    string email;
    std::getline(cin, email);

    if ((email.find("@") != string::npos) and (email.find(" ") == string::npos)) {
        size_t dot = email.find("@");
        string verify_email = email.substr(dot); 
        if (verify_email.rfind(".") != string::npos) { 
            cout << "Ваша email введен правильно: " << email << endl;
        } else { 
            cout << "Проверьте почту. Она введена неверно" << endl;
        }
    } else {
        cout << "Проверьте почту. Она введена неверно" << endl;
    }
}