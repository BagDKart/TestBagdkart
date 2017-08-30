package com.example.vivek.bagdkart;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.Color;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.ViewGroup;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

public class Requestforpickup extends AppCompatActivity {
    final Context context = this;
    EditText editTextpickup, editTextdrop, editTextname, editTextmobile;
    ImageView imgpickup, imgdrop, imgnormal, imgcatering, imgasap,imgfuture, imgaddress, imgspecialinsructions;
    Button buttonnormalp, buttonexpress, buttonsecure, rfd;
    TextView packagedetails, Normal, catering, packagetype, asap, future, customerdetails, name, mobile, addressdetails, deliverytype, specialinsructions;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_requestforpickup);

        editTextpickup = (EditText) findViewById(R.id.editTextpickup);
        editTextdrop = (EditText) findViewById(R.id.editTextdrop);
        editTextname = (EditText) findViewById(R.id.editTextname);
        editTextmobile = (EditText) findViewById(R.id.editTextmobile);
        imgpickup = (ImageView) findViewById(R.id.imgpickup);
        imgdrop = (ImageView) findViewById(R.id.imgdrop);
        imgnormal = (ImageView) findViewById(R.id.imgnormal);
        imgcatering = (ImageView) findViewById(R.id.imgcatering);
        imgasap = (ImageView) findViewById(R.id.imgasap);
        imgfuture = (ImageView) findViewById(R.id.imgfuture);
        imgspecialinsructions = (ImageView) findViewById(R.id.imgspecialinsructions);
        imgaddress = (ImageView) findViewById(R.id.imgaddress);
        packagedetails = (TextView) findViewById(R.id.packagedetails);
        Normal = (TextView) findViewById(R.id.Normal);
        catering = (TextView) findViewById(R.id.catering);
        packagetype = (TextView) findViewById(R.id.packagetype);
        asap = (TextView) findViewById(R.id.asap);
        future = (TextView) findViewById(R.id.future);
        customerdetails = (TextView) findViewById(R.id.customerdetails);
        name = (TextView) findViewById(R.id.name);
        specialinsructions = (TextView) findViewById(R.id.specialinsructions);
        mobile = (TextView) findViewById(R.id.mobile);
        addressdetails = (TextView) findViewById(R.id.addressdetails);
        deliverytype = (TextView) findViewById(R.id.deliverytype);
        buttonnormalp = (Button) findViewById(R.id.buttonnormalp);
        buttonexpress = (Button) findViewById(R.id.buttonexpress);
        buttonsecure = (Button) findViewById(R.id.buttonsecure);
        rfd = (Button) findViewById(R.id.rfd);



        addressdetails.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View arg0) {

                AlertDialog.Builder mBuilder = new AlertDialog.Builder(Requestforpickup.this, R.style.DialogeTheme);
                mBuilder.setCancelable(false);
                mBuilder.setPositiveButton("SUBMIT",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface DialogInterface,
                                                int i) {

                            }
                        });
                mBuilder.setNegativeButton("CANCEL", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface DialogInterface, int i) {

                        DialogInterface.cancel();

                    }
                });


                View mview = getLayoutInflater().inflate(R.layout.customaddress, null);
                EditText customeditaddress = (EditText) mview.findViewById(R.id.customeditaddress);
                TextView customaddressdetails = (TextView) mview.findViewById(R.id.customaddressdetails);

                mBuilder.setView(mview);
                AlertDialog dialog = mBuilder.create();
                dialog.show();

                /*Button nbutton = dialog.getButton(DialogInterface.BUTTON_NEGATIVE);
                nbutton.setBackgroundColor(Color.WHITE);
                nbutton.setTextColor(Color.BLUE);
                Button pbutton = dialog.getButton(DialogInterface.BUTTON_POSITIVE);
                pbutton.setBackgroundColor(Color.WHITE);
                pbutton.setTextColor(Color.BLUE);*/

                dialog.getButton(dialog.BUTTON_NEGATIVE).setTextColor(Color.BLUE);
                dialog.getButton(dialog.BUTTON_POSITIVE).setTextColor(Color.BLUE);


            }

        });

        specialinsructions.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View arg0) {

                AlertDialog.Builder mBuilder = new AlertDialog.Builder(Requestforpickup.this, R.style.DialogeTheme);
                mBuilder.setCancelable(false);
                mBuilder.setPositiveButton("SUBMIT",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface DialogInterface,
                                                int i) {

                            }
                        });
                mBuilder.setNegativeButton("CANCEL", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface DialogInterface, int i) {

                        DialogInterface.cancel();

                    }
                });


                View mview = getLayoutInflater().inflate(R.layout.customaddress, null);
                EditText editcustomspecialinstructions = (EditText) mview.findViewById(R.id.editcustomspecialinstructions);
                TextView customspecialinstructions = (TextView) mview.findViewById(R.id.customspecialinstructions);

                mBuilder.setView(mview);
                AlertDialog dialog = mBuilder.create();
                dialog.show();

                /*Button nbutton = dialog.getButton(DialogInterface.BUTTON_NEGATIVE);
                nbutton.setBackgroundColor(Color.WHITE);
                nbutton.setTextColor(Color.BLUE);
                Button pbutton = dialog.getButton(DialogInterface.BUTTON_POSITIVE);
                pbutton.setBackgroundColor(Color.WHITE);
                pbutton.setTextColor(Color.BLUE);*/

                dialog.getButton(dialog.BUTTON_NEGATIVE).setTextColor(Color.BLUE);
                dialog.getButton(dialog.BUTTON_POSITIVE).setTextColor(Color.BLUE);


            }

        });




    }
}
