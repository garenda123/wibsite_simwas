import React, { Component } from 'react';
// import { Text } from 'react-native';
 
export default class FormatNumber extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    formatingDate() {
        var format = this.props.format
        var dateString = this.props.value.slice(0, 10)
        var d = new Date(dateString)
        var date = d.getDate()
        var day = d.getDay()
        var month = d.getMonth()
        var year = d.getFullYear()
        var namahariS = ''
        var namahariL = ''
        var namablnS = 'x'
        var namablnL = ''
        var bln = ''
 
        switch (day) {
            case 0:
                namahariL = 'Minggu'
                namahariS = 'Min'
                break;
            case 1:
                namahariL = 'Senin'
                namahariS = 'Sen'
                break;
            case 2:
                namahariL = 'Selasa'
                namahariS = 'Sel'
                break;
            case 3:
                namahariL = 'Rabu'
                namahariS = 'Rab'
                break;
            case 4:
                namahariL = 'Kamis'
                namahariS = 'Kam'
                break;
            case 5:
                namahariL = 'Jumat'
                namahariS = 'Jum'
                break;
            case 6:
                namahariL = 'Sabtu'
                namahariS = 'Sab'
                break;
 
            default:
                break;
        }
 
        switch (month) {
            case 0:
                namablnL = 'Januari'
                namablnS = 'Jan'
                break;
            case 1:
                namablnL = 'Pebruari'
                namablnS = 'Peb'
                break;
            case 2:
                namablnL = 'Maret'
                namablnS = 'Mar'
                break;
            case 3:
                namablnL = 'April'
                namablnS = 'Apr'
                break;
            case 4:
                namablnL = 'Mei'
                namablnS = 'Mei'
                break;
            case 5:
                namablnL = 'Juni'
                namablnS = 'Jun'
                break;
            case 6:
                namablnL = 'Juli'
                namablnS = 'Jul'
                break;
            case 7:
                namablnL = 'Agustus'
                namablnS = 'Ags'
                break;
            case 8:
                namablnL = 'September'
                namablnS = 'Sep'
                break;
            case 9:
                namablnL = 'Oktober'
                namablnS = 'Okt'
                break;
            case 10:
                namablnL = 'November'
                namablnS = 'Nov'
                break;
            case 11:
                namablnL = 'Desember'
                namablnS = 'Des'
                break;
 
            default:
                break;
        }
 
        if (date.toString().length == 1) {
            date = '0' + date
        }        
 
        //tahun
        format = format.replace('y', year.toString().slice(2, 4))
        format = format.replace('Y', year)        
 
        //hari
        format = format.replace('d', date)
        format = format.replace('D', namahariS)
        format = format.replace('N', namahariL)      
 
        //bulan
        format = format.replace('n', bln)
        format = format.replace('M', namablnL)
        format = format.replace('F', namablnS)
       
        return format
    }
 
    formatingNumber() {
        var number = this.props.value
        var newString = ''
        var i = 1
        var step = 1
        var nilai = ''
        var delimeter = '.'
        var negatif = false
     
        number = parseFloat(number).toFixed(this.props.decimal)
 
        if (number < 0) {
            number = number * -1
            negatif = true
        }
 
        var str = number.toString();
 
        for (var i = str.length - 1; i >= 0; i--) {
            nilai += str.charAt(i)
            if (step == 3) {            
                nilai += delimeter
                step = 1
            } else {
                step += 1
            }
        }
 
        newString = ''
        for (var i = nilai.length - 1; i >= 0; i--) {
            newString += nilai.charAt(i)
        }
 
        if (newString.charAt(0) == delimeter) {
            newString = newString.slice(1)
        }
 
        if (negatif) {
            return '(' + newString + ')'
        }
        return newString
 
    }
 
 
 
    render() {
 
        if (this.props.type == 'currency') {
            return (
                {this.formatingNumber()}
            );
        } else if (this.props.type == 'date') {
 
            return (
                {this.formatingDate()}
            );
        } else {
            return (
               
            );
        }
    }
 
 
 
}