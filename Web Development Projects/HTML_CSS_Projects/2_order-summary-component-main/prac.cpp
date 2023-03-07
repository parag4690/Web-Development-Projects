#include <bits/stdc++.h>
using namespace std;

int main(){
    string s;
    cin>>s;
    int x=0 , y=0;
    string helper="";
    for(int i=0; i<s.length(); i++){
        if(s[i]=='N'){
            y++;
        }
        if(s[i]=='S') y--;
        if(s[i]=='E') x++;
        if(s[i]=='W') x--;
    }
    if(y>0){
        while(y--) helper+='N';
        y=0;
    }
    if(x>0){
        while(x--) helper+='E';
        x=0;
    }
    if(y<0){
        y=abs(y);
         while(y--){ helper+='S';}
    }
    if(x<0){
        x=abs(x);
        while(x--) helper+='W'; 
    }
    cout<<helper<<endl;
}